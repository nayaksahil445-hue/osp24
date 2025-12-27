function findMySchemeAI() {

  const user = {
    age: Number(document.getElementById("aiAge").value),
    income: Number(document.getElementById("aiIncome").value),
    caste: document.getElementById("aiCaste").value,
    occupation: document.getElementById("aiOccupation").value
  };

  let html = `<p><b>🤖 AI କହୁଛି:</b></p>`;
  const result = aiDecision(user);

  if (result.length === 0) {
    html += `
    😔 ଆପଣଙ୍କ ତଥ୍ୟ ଅନୁସାରେ ଏବେ
    କୌଣସି ଯୋଜନା match କରୁନାହିଁ ।
    ଆପଣ CSC କେନ୍ଦ୍ରରେ ଏକଥର ପଚାରନ୍ତୁ ।
    `;
  }

  result.forEach(s => {
    html += `
    <div class="ai-card">
      <h3>✅ ${s.name}</h3>
      <p>${s.explain}</p>

      <b>📄 ଆବଶ୍ୟକ ଡକ୍ୟୁମେଣ୍ଟ:</b>
      <ul>${s.docs.map(d => `<li>${d}</li>`).join("")}</ul>

      <b>📝 ଆବେଦନ ପଦକ୍ରମ:</b>
      <ol>${s.steps.map(st => `<li>${st}</li>`).join("")}</ol>

      <p><i>👉 ଏହା AI ର ସୁପାରିଶ ।</i></p>
    </div>
    `;
  });

  document.getElementById("aiResult").innerHTML = html;
}