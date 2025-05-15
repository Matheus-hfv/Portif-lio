// Exemplo de mensagem de confirmação ao enviar o formulário
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
  this.reset();
});
// Isso já é padrão, mas aqui está o código se quiser controlar manualmente
// Isso já é padrão, mas aqui está o código se quiser controlar manualmente
const techCarousel = document.querySelector('#techCarousel');
const carousel = new bootstrap.Carousel(techCarousel, {
  interval: 2000, // Tempo entre slides
  ride: 'carousel', // Inicia automaticamente
  wrap: true       // Volta ao primeiro slide após o último
});

 const phrases = [
    "Desenvolvedor Front-end",
    "Back-end",
    "Criativo"
  ];

  const typedText = document.getElementById("typed-text");
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      letterIndex--;
      typedText.textContent = currentPhrase.substring(0, letterIndex);
    } else {
      letterIndex++;
      typedText.textContent = currentPhrase.substring(0, letterIndex);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && letterIndex === currentPhrase.length) {
      speed = 1500;
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  document.addEventListener("DOMContentLoaded", type);

  

  