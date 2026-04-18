function goToStep(current, next, stepNumber) {
  current.classList.add("hidden");
  next.classList.remove("hidden");
  updateStepIndicator(stepNumber);
}

function updateStepIndicator(step) {
  document.getElementById("step-indicator").innerText = step;
}

function setLoading(element, message) {
  element.innerHTML = `<p>${message}</p>`;
}

function showError(element, message) {
  element.innerHTML = `<p style="color:red">${message}</p>`;
}

function renderResult(data) {
  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.message}</p>

    <a href="${data.link}" target="_blank" class="btn">
      Ir para recuperação no Instagram
    </a>

    <p class="tips">⚠ Nunca compartilhe sua senha.</p>
  `;
}

function resetFlow() {
  document.getElementById("step1").classList.remove("hidden");
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");

  updateStepIndicator(1);
}

function goBack() {
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");

  updateStepIndicator(1);
}