import { parseTimeInput, validateStartEnd } from "./err/time-calc-error.js";

export function inputUI() {
  let startStr, endStr;

  while (true) {
    try {
      startStr = prompt("開始時刻を入力してください（hh:mm:ss）");
      parseTimeInput(startStr);
      endStr   = prompt("終了時刻を入力してください（hh:mm:ss）");
      parseTimeInput(endStr);
      validateStartEnd(startStr, endStr);
      break;
    } catch (e) {
      alert(e.message);
    }
  }

  return [startStr, endStr];
}
