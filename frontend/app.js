
const form = document.getElementById("contatoForm");
const mensagemStatus = document.getElementById("mensagemStatus");
const toggleThemeBtn = document.getElementById("toggleTheme");


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    mensagemStatus.textContent = "Preencha todos os campos!";
    mensagemStatus.style.color = "red";
    return;
  }


  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    mensagemStatus.textContent = " Digite um e-mail válido!";
    mensagemStatus.style.color = "red";
    return;
  }

  mensagemStatus.textContent = " Mensagem enviada com sucesso!";
  mensagemStatus.style.color = "green";

  form.reset(); 
});


toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleThemeBtn.textContent = "Tema Claro";
  } else {
    toggleThemeBtn.textContent = "Tema Escuro";
  }
});
