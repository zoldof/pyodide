// timeValidator.js

export function parseTimeInput(input) {
  if (input === null) {
    throw new Error("キャンセルはできません。時刻を入力してください。");
  }

  const parts = input.split(":");
  if (parts.length !== 3) {
    throw new Error("形式が間違っています（例：08:30:00）");
  }

  const [h, m, s] = parts.map(Number);
  if (!Number.isInteger(h) || !Number.isInteger(m) || !Number.isInteger(s)) {
    throw new Error("時刻は整数（例：14:05:00）で入力してください。");
  }

  if (!(
    (0 <= h && h <= 23 || (h === 24 && m === 0 && s === 0)) &&
    (0 <= m && m < 60) &&
    (0 <= s && s < 60)
  )) {
    throw new Error("無効な時刻です。時は 0–23、または 24:00:00 のみ有効です。");
  }

  return [h, m, s];
}

export function validateStartEnd(startParts, endParts) {
  if (startParts == endParts) {
    throw new Error("開始時刻と終了時刻が同じです。異なる時刻を入力してください。");
  }
}
