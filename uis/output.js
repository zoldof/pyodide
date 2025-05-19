function formatResult(resultData) {
  const lines = [];
  for (const [key, value] of Object.entries(resultData)) {
    if (Array.isArray(value)) {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    } else {
      lines.push(`${key}: ${value}`);
    }
  }
  return lines.join("\n");
}

export function showOutput(result) {
  const data = JSON.parse(result)
  const output = formatResult(data)
  document.getElementById("output").textContent = output;
}
