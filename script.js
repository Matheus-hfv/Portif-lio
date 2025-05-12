// Exemplo de mensagem de confirmação ao enviar o formulário
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
  this.reset();
});
