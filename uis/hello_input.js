// ← import はファイルの先頭
import Swal from 'sweetalert2';

// 名前入力UIのエクスポート関数
export async function inputUI() {
  const config = {
    title: "名前の入力",
    input: "text",
    inputPlaceholder: "あなたの名前は？",
    showCancelButton: true,
    confirmButtonText: "決定",
    cancelButtonText: "キャンセル"
  };

  const { value, isConfirmed } = await Swal.fire(config);
  return (isConfirmed && value) || "名無しの旅人";
}
