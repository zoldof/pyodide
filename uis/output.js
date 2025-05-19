export function showOutput(result) {
  const data = JSON.parse(result)
  const output = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  document.getElementById("output").textContent = output;
}
