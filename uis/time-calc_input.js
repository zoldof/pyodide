import { parseTimeInput, validateStartEnd } from "./err/time-calc-error.js";

export function inputUI() {
  let startParts, endParts;

  while (true) {
    try {
      startParts = parseTimeInput(prompt("開始時刻を入力してください（hh:mm:ss）"));
      endParts   = parseTimeInput(prompt("終了時刻を入力してください（hh:mm:ss）"));

      validateStartEnd(startParts, endParts);
      break;
    } catch (e) {
      alert(e.message);
    }
  }

  return [startParts, endParts];
}
