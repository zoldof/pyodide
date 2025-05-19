const params = new URLSearchParams(location.search);
const repo = params.get('repo');
const ui = params.get('ui');
const file = `${ui}.py`;

import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.mjs";
const init = await fetch(`https://zoldof.github.io/pyodide/init.py`);
const pyfile = await fetch(`https://zoldof.github.io/${repo}/${file}`);
const measure = await fetch(`https://zoldof.github.io/pyodide/measure.py`);
const pyodide = await loadPyodide();
const showText = await pyfile.text();
const scriptText = [await init.text(), showText, await measure.text()].join('\n\n');
const codeBlock = document.getElementById("sourceCode");
codeBlock.textContent = showText;
hljs.highlightElement(codeBlock);
await pyodide.runPythonAsync(scriptText);

// Python 関数を取得（main名と一致させる）
const pyFunc = pyodide.globals.get('measure');

// 入力UI（あれば使う）
let inputUI = () => {};
const inputModule = await import(`./uis/${ui}_input.js`).catch(() => {});
if (inputModule?.inputUI) {
  inputUI = inputModule.inputUI;
}
// pyodideでpyの関数を使用
const result = pyFunc(inputUI());
pyFunc.destroy();

// 出力UI（必ず用意されている前提）
(await import(`./uis/output.js`)).showOutput(result);
