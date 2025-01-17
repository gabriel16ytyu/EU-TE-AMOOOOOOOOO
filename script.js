function checkPassword() {
  const senha = document.getElementById("senha").value;
  if (senha === "04052009") {
    window.location.href = "etapa3.html";
  } else {
    alert("Senha incorreta! Tente novamente.");
  }
}

function checkAnswer(option) {
  if (option === 1) {
    window.location.href = "etapa4.html";
  } else {
    alert("Escolha errada! Tente novamente.");
  }
}

function saveMessage() {
  const mensagem = document.getElementById("mensagem").value;
  if (mensagem) {
    alert("Mensagem salva com sucesso! Obrigado! ❤️");
    window.location.href = "etapa5.html";
  } else {
    alert("Por favor, escreva algo antes de continuar.");
  }
}

function checkEnigma() {
  const resposta = document.getElementById("resposta").value.toLowerCase();
  if (resposta === "amor") {
    window.location.href = "final.html";
  } else {
    alert("Resposta errada! Tente novamente.");
  }
}
