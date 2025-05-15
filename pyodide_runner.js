const params = new URLSearchParams(location.search);
const repo = params.get('repo');
const ui = params.get('ui');
const file = `${main}.py`;

import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.mjs";
const pyfile = await fetch(`https://zoldof.github.io/${repo}/${file}`);
const pyodide = await loadPyodide();
const scriptText = await pyfile.text();
await pyodide.runPythonAsync(scriptText);

// Python 関数を取得（main名と一致させる）
const pyFunc = pyodide.globals.get('main');

// 入力UI（あれば使う）
let inputUI = () => {};
const inputModule = await import(`./uis/${ui}_input.js`).catch(() => {});
if (inputModule?.inputUI) {
  inputUI = inputModule.inputUI;
}
// pyodideでpyの関数を使用
const result = pyFunc(inputUI);
pyFunc.destroy();

// 出力UI（必ず用意されている前提）
(await import(`./uis/${ui}_output.js`)).showOutput(result);
