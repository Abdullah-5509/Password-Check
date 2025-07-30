const passwordInput = document.getElementById("password");
const resultSpan = document.getElementById("result");

function checkNow() {
  const password = passwordInput.value;
  const strength = getStrength(password);
  resultSpan.textContent = strength.label;
  resultSpan.style.color = strength.color;
}

function getStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[\W_]/.test(password)) score++;

  if (score <= 2) return { label: "Weak", color: "red" };
  if (score <= 4) return { label: "Moderate", color: "orange" };
  return { label: "Strong", color: "green" };
}

