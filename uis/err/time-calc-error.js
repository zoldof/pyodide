export function parseTimeInput(input) {
  //if (input === null) {
    //throw new Error("キャンセルはできません。時刻を入力してください。");
  //}
  if (input === null) {
    alert("キャンセルされました。10秒後に再度入力を促します。");
    setTimeout(() => {
      parseTimeInput(input); // 再帰的に再呼び出し
    }, 10000); // 10000ミリ秒 = 10秒
    return;
  }

  const parts = input.split(":");
  if (parts.length !== 3 || !parts.every(part => /^\d{2}$/.test(part))) {
    throw new Error("時刻は2桁ずつ（例：08:30:00）で入力してください。");
  }

  const [h, m, s] = parts.map(Number);

  if (!(
    (0 <= h && h <= 23 || (h === 24 && m === 0 && s === 0)) &&
    (0 <= m && m < 60) &&
    (0 <= s && s < 60)
  )) {
    throw new Error("無効な時刻です。時は 0–23、または 24:00:00 のみ有効です。");
  }
  return input;
}

export function validateStartEnd(startStr, endStr) {
  if (startStr == endStr) {
    throw new Error("開始時刻と終了時刻が同じです。異なる時刻を入力してください。");
  }
}
