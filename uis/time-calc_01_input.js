import { parseTimeInput, validateStartEnd } from "./err/time-calc-error.js";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTimeInputLoop(message) {
  const config = {
    title: "時刻の入力",
    input: "text",
    inputPlaceholder: message,
    showCancelButton: true,
    confirmButtonText: "決定",
    cancelButtonText: "キャンセル"
  };
  
  while (true) {
    const { value, isConfirmed } = await Swal.fire(config);

    if (!(isConfirmed && value)) {
      alert("キャンセルされました。5秒後にもう一度お聞きします。");
      await delay(5000); // 5秒待つ
      continue; // もう一度 prompt に戻る
    }

    try {
      return parseTimeInput(value);
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
