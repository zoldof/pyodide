function formatResult(resultData) {
  const lines = [];
  for (const [key, value] of Object.entries(resultData)) {
    if (typeof value === "number") {
      lines.push(`${key}: ${value.toFixed(6)} 秒`);
    } else if (Array.isArray(value)) {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    } else if (key === "メモリ（現時点）" || key === "メモリ（ピーク）") {
      lines.push(`${key}: ${value} bytes`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  return lines.join("\n");
}

export function showOutput(result) {
  const output = formatResult(result)
  document.getElementById("output").textContent = output;
}
