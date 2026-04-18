const state = {
  problem: null,
  emailAccess: null
};

const elements = {
  step1: document.getElementById("step1"),
  step2: document.getElementById("step2"),
  result: document.getElementById("result"),
  output: document.getElementById("output"),
  stepIndicator: document.getElementById("step-indicator") // Adicionei para atualizar o número
};

document.querySelectorAll("[data-problem]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.problem = btn.dataset.problem;
    
    // --- LÓGICA DE PERSONALIZAÇÃO ---
    const step2Title = elements.step2.querySelector("h2");
    
    if (state.problem === 'email') {
      // Se ele já disse que perdeu o e-mail, pergunto sobre o Celular
      step2Title.innerText = "Você ainda possui o número de celular vinculado?";
    } else {
      // Caso contrário, vou manter a pergunta padrão
      step2Title.innerText = "Você ainda tem acesso ao e-mail da conta?";
    }
    
    goToStep(elements.step1, elements.step2, 2);
  });
});

document.querySelectorAll("[data-answer]").forEach(btn => {
  btn.addEventListener("click", () => {
    state.emailAccess = btn.dataset.answer;
    generatePlan();
  });
});

// Função para mudar o passo visualmente e atualizar o indicador
function goToStep(hide, show, stepNumber) {
    hide.classList.add("hidden");
    show.classList.remove("hidden");
    if (elements.stepIndicator) {
        elements.stepIndicator.innerText = stepNumber;
    }
}

async function generatePlan() {
  goToStep(elements.step2, elements.result, 3);
  setLoading(elements.output, "Gerando seu plano personalizado...");

  // URL do meu render.
  const API_URL = "https://instarecover.onrender.com/api/recovery";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    });

    if (!response.ok) throw new Error("Erro na resposta do servidor");

    const data = await response.json();
    renderResult(data);

  } catch (error) {
    console.error("Erro detalhado:", error);
    showError(elements.output, "Não foi possível conectar ao servidor. Verifique sua conexão.");
  }
}