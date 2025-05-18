// inputUI.js
import { parseTimeInput, validateStartEnd } from "./timeValidator.js";

export function inputUI() {
  function getTimeParts(label) {
    while (true) {
      const t = prompt(`${label}を入力してください（hh:mm:ss）`);

      try {
        return parseTimeInput(t);
      } catch (e) {
        alert(e.message);
      }
    }
  }

  let startParts, endParts;
  while (true) {
    startParts = getTimeParts("開始時刻");
    endParts = getTimeParts("終了時刻");

    try {
      validateStartEnd(startParts, endParts);
      break;
    } catch (e) {
       alert(e.message);
    }
  }

  return [startParts, endParts];
}
