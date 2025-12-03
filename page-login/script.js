function acaoCheckbox() {
  const checkbox = document.getElementById("checkLogin");

  if (checkbox.checked) {
    salvar();
  } else {
    carregar();
  }
}

function salvar() {
  const gmail = document.getElementById("gmail").value;
  const senha = document.getElementById("senha").value;

  localStorage.setItem("gmail", gmail);
  localStorage.setItem("senha", senha);

  document.getElementById("resultado").innerText =
  "Dados salvos!";
    
}

function carregar() {
  const gmail = localStorage.getItem("gmail");
  const senha = localStorage.getItem("senha");

  document.getElementById("resultado").innerText =
    `Gmail: ${gmail}\nSenha: ${senha}`;
}