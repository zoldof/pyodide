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
  return [(isConfirmed && value) || "名無しの旅人"];
}
