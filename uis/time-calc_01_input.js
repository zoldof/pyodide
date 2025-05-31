import { parseTimeInput, validateStartEnd } from "./err/time-calc-error.js";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTimeInputLoop(promptMessage) {
  const config = {
    title: promptMessage,
    input: "text",
    inputPlaceholder: "hh:mm:ss",
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
  const startStr = await getTimeInputLoop("開始時刻を入力してください");
  const endStr   = await getTimeInputLoop("終了時刻を入力してください");

  validateStartEnd(startStr, endStr);
  return [startStr, endStr];
}
