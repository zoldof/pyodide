import { parseTimeInput, validateStartEnd } from "./err/time-calc-error.js";

export function inputUI() {
  let startStr, endStr;

  while (true) {
    try {
      startStr = parseTimeInput(prompt("開始時刻を入力してください（hh:mm:ss）"));
      endStr   = parseTimeInput(prompt("終了時刻を入力してください（hh:mm:ss）"));
      validateStartEnd(startStr, endStr);
      break;
    } catch (e) {
      alert(e.message);
    }
  }

  return [startStr, endStr];
}
