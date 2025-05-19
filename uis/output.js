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
  const output = Object.entries(data)
    .map(([key, value]) => `${key}:${value}`)
    .join("\n");
  document.getElementById("output").textContent = output;
}
