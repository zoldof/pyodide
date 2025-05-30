import { parseTimeInput, validateStartEnd } from "./err/time-calc-error.js";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTimeInputLoop(message) {
  while (true) {
    const input = prompt(message);

    if (input === null) {
      alert("キャンセルされました。5秒後にもう一度お聞きします。");
      await delay(5000); // 10秒待つ
      continue; // もう一度 prompt に戻る
    }

    try {
      return parseTimeInput(input);
    } catch (e) {
      alert(e.message);
    }
  }
}

export async function inputUI() {
  const startStr = await getTimeInputLoop("開始時刻を入力してください（hh:mm:ss）");
  const endStr   = await getTimeInputLoop("終了時刻を入力してください（hh:mm:ss）");

  validateStartEnd(startStr, endStr);
  return [startStr, endStr];
}
