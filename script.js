const music = document.getElementById("memoryMusic");
music.volume = 0.2; // volume suave

/* CARROSSEL */
const images = [
  "Imagem do WhatsApp de 2025-11-15 à(s) 19.28.06_197c4deb.jpg",
  "Imagem do WhatsApp de 2025-12-15 à(s) 15.01.08_59fb648f.jpg",
  "Imagem do WhatsApp de 2025-12-15 à(s) 15.01.08_595a0ff6.jpg",
  "Imagem do WhatsApp de 2025-12-15 à(s) 15.01.08_112970f8.jpg",
  "IMG-20251202-WA0020.jpg",
  "IMG-20251202-WA0021.jpg",
  "IMG-20251202-WA0022.jpg",
  "IMG-20251202-WA0023.jpg",
  "IMG-20251202-WA0024.jpg",
  "IMG-20251202-WA0025.jpg",
  "IMG-20251206-WA0026.jpg",
  "IMG-20251206-WA0027.jpg",
  "IMG-20251206-WA0029.jpg",
  "IMG-20251206-WA0028.jpg",
  "IMG-20251207-WA0017.jpg",
  "IMG-20251207-WA0020.jpg",
  "IMG-20251207-WA0032.jpg",
  "IMG-20251207-WA0037.jpg",
  "IMG-20251211-WA0007.jpg",
  "IMG-20251212-WA0004.jpg",
  "IMG-20251215-WA0008.jpg"

];

const texts = [
    "Você é meu lugar seguro.",
    "Meu sorriso sempre começa em você.",
    "Tudo fica melhor quando é ao seu lado.",
    "Você é a parte mais bonita dos meus dias.",
    "Meu coração escolheu você todos os dias.",
    "Seu abraço é onde o mundo para.",
    "Você transforma o simples em especial.",
    "Amar você é fácil.",
    "Você é calma, é casa, é amor.",
    "Com você, tudo faz sentido.",
    "Você é meu hoje, meu amanhã.",
    "Te amar é meu melhor hábito.",
    "Você é o meu sempre.",
    "Meu lugar favorito é ao seu lado.",
    "Você é o detalhe que faltava na minha vida.",
    "Meu coração sorri quando pensa em você.",
    "Você é meu melhor acaso.",
    "Você é amor em forma de pessoa.",
    "Com você, eu fico em paz.",
    "Você é tudo o que eu pedi sem saber pedir.",
    "Você é Minha Criança S2"
];

let index = 0;
const imgEl = document.getElementById("carouselImage");
const textEl = document.getElementById("carouselText");

function changeCarousel() {
  index = (index + 1) % images.length;
  imgEl.style.opacity = 0;
  textEl.style.opacity = 0;

  setTimeout(() => {
    imgEl.src = images[index];
    textEl.textContent = texts[index];
    imgEl.style.opacity = 1;
    textEl.style.opacity = 1;
  }, 500);
}

setInterval(changeCarousel, 4000);

/* BOLO */
const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");
const slideshow = document.getElementById("finalSlideshow");
const slideImg = document.getElementById("slideshowImage");

const finalImages = [
  "Imagem do WhatsApp de 2025-11-15 à(s) 19.28.06_197c4deb.jpg",
  "Imagem do WhatsApp de 2025-12-15 à(s) 15.01.08_59fb648f.jpg",
  "Imagem do WhatsApp de 2025-12-15 à(s) 15.01.08_595a0ff6.jpg",
  "Imagem do WhatsApp de 2025-12-15 à(s) 15.01.08_112970f8.jpg",
  "IMG-20251202-WA0020.jpg",
  "IMG-20251202-WA0021.jpg",
  "IMG-20251202-WA0023.jpg",
  "IMG-20251206-WA0026.jpg",
  "IMG-20251206-WA0029.jpg",
  "IMG-20251206-WA0030.jpg",
  "IMG-20251207-WA0009.jpg",
  "IMG-20251207-WA0017.jpg",
  "IMG-20251207-WA0020.jpg",
  "IMG-20251206-WA0027.jpg",
  "IMG-20251202-WA0022.jpg",
  "IMG-20251207-WA0030.jpg",
  "IMG-20251212-WA0201.jpg",
  "IMG-20251202-WA0025.jpg",
  "IMG-20251212-WA0006.jpg",
  "IMG-20251212-WA0202.jpg",
  "IMG-20251207-WA0037.jpg",
  "IMG-20251214-WA0002.jpg",
  "IMG-20251202-WA0024.jpg",
  "IMG-20251214-WA0006.jpg",
  "IMG-20251207-WA0032.jpg",
  "IMG-20251212-WA0231.jpg",
  "IMG-20251212-WA0007.jpg",
  "IMG-20251212-WA0004.jpg",
  "IMG-20251212-WA0005.jpg",
  "IMG-20251207-WA0035.jpg",
  "IMG-20251211-WA0007.jpg",
  "IMG-20251215-WA0007.jpg",
  "IMG-20251215-WA0009.jpg",
  "IMG-20251215-WA0011.jpg",
  "IMG-20251215-WA0010.jpg",
  "IMG-20251215-WA0008.jpg",
  
  
];

let slideIndex = 0;

blowBtn.addEventListener("click", () => {
  const overlay = document.getElementById("fadeOverlay");

  blowBtn.addEventListener("click", () => {
  // Apaga a chama com suavidade
  flame.style.transition = "opacity 1.5s ease";
  flame.style.opacity = 0;

  // Escurece a tela lentamente
  overlay.style.opacity = 1;

   music.play().catch(() => {});
  // Mostra slideshow após o fade
  setTimeout(() => {
    slideshow.classList.remove("hidden");
    startSlideshow();
  }, 1500);
});
});

function startSlideshow() {
  setInterval(() => {
    slideIndex = (slideIndex + 1) % finalImages.length;
    slideImg.src = finalImages[slideIndex];
  }, 1500);
}

