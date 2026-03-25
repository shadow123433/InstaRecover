const state = {
  problem: null,
  emailAccess: null
};

const elements = {
  step1: document.getElementById("step1"),
  step2: document.getElementById("step2"),
  result: document.getElementById("result"),
  output: document.getElementById("output")
};

document.querySelectorAll("[data-problem]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.problem = btn.dataset.problem;
    goToStep(elements.step1, elements.step2, 2);
  });
});

document.querySelectorAll("[data-answer]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.emailAccess = btn.dataset.answer;
    generatePlan();
  });
});

async function generatePlan() {
  goToStep(elements.step2, elements.result, 3);
  setLoading(elements.output, "Gerando plano...");

  try {
    const response = await fetch("http://localhost:3000/api/recovery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    });

    if (!response.ok) throw new Error();

    const data = await response.json();

    renderResult(data);

  } catch {
    showError(elements.output, "Erro ao conectar com o servidor.");
  }
}