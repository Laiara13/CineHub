//Guilherme

// Seleciona o elemento com o ID "burger" (provavelmente um botão de menu)
const burger = document.getElementById("burger");

// Seleciona o elemento com o ID "itens" (provavelmente os itens do menu)
const itens = document.getElementById("itens");

// Adiciona um ouvinte de evento para o evento de clique no elemento "burger"
burger.addEventListener("click", function() {
  // Verifica se a propriedade "display" do elemento "itens" não é igual a "flex"
  if (itens.style.display != "flex") {
    // Se a condição acima for verdadeira, muda a propriedade "display" do elemento "itens" para "flex"
    itens.style.display = "flex";
  } else {
    // Se a condição acima for falsa, muda a propriedade "display" do elemento "itens" para "none"
    itens.style.display = "none";
  }
});

//Laiara

// Seleciona todos os elementos com a classe "container"
const containers = document.querySelectorAll('.container');

// Para cada elemento com a classe "container"
containers.forEach((container) => {
  // Seleciona o elemento com a classe "galeria_fotos" dentro do container atual
  const galeria = container.querySelector('.galeria_fotos');

  // Seleciona o elemento com a classe "film-container" dentro da galeria atual
  const filmContainer = galeria.querySelector('.film-container');

  // Seleciona todas as imagens com a classe "foto_do_carrocel" dentro do filmContainer atual
  const fotos = filmContainer.querySelectorAll('.foto_do_carrocel');

  // Obtém o número total de imagens
  const numFotos = fotos.length;

  // Variável para acompanhar o índice da imagem atualmente exibida
  let fotoAtualIndex = 0;

  // Função para atualizar a exibição da foto e controlar a opacidade das imagens
  function atualizarFotoExibida() {
    // Calcula o valor de translação para o filmContainer com base no índice da imagem atual
    const translateValue = -fotoAtualIndex * fotos[0].clientWidth;
    // Atualiza a propriedade CSS para mover as imagens horizontalmente
    filmContainer.style.transform = `translateX(${translateValue}px)`;

    // Define a opacidade de cada imagem com base no índice da imagem atual
    fotos.forEach((foto, index) => {
      if (index === fotoAtualIndex) {
        foto.style.opacity = 1; // Imagem atual tem opacidade total
      } else {
        foto.style.opacity = 0.2; // Outras imagens têm opacidade reduzida
      }
    });
  }

  // Adiciona um ouvinte de evento para o botão "passar_direita"
  container.querySelector('.passar_direita').addEventListener('click', () => {
    // Calcula o próximo índice da imagem a exibir, retrocedendo no ciclo se necessário
    fotoAtualIndex = (fotoAtualIndex - 1 + numFotos) % numFotos;
    // Chama a função para atualizar a exibição da foto
    atualizarFotoExibida();
  });

  // Adiciona um ouvinte de evento para o botão "passar_esquerda"
  container.querySelector('.passar_esquerda').addEventListener('click', () => {
    // Calcula o próximo índice da imagem a exibir, avançando no ciclo
    fotoAtualIndex = (fotoAtualIndex + 1) % numFotos;
    // Chama a função para atualizar a exibição da foto
    atualizarFotoExibida();
  });

  // Chama a função para atualizar a exibição da foto inicialmente
  atualizarFotoExibida();
});

//Felipe

// Seleciona o elemento com a classe "carrosseldes" (provavelmente o container do carrossel)
const carrosselSection = document.querySelector('.carrosseldes');

// Seleciona o elemento com a classe "carousel-container" dentro do container do carrossel
const carouselContainer = carrosselSection.querySelector('.carousel-container');

// Seleciona o elemento com a classe "carousel-item" dentro do container do carrossel
const carouselItems = carouselContainer.querySelector('.carousel-item');

// Seleciona todos os elementos com a classe "imgcar" dentro do elemento "carouselItems"
const carouselImages = carouselItems.querySelectorAll('.imgcar');

// Obtém o número total de elementos com a classe "imgcar"
const numItems = carouselImages.length;

// Inicializa o índice do item atual como 0
let currentItemIndex = 0;

// Variável para armazenar o intervalo de reprodução automática
let autoPlayInterval;

// Função para atualizar a posição do banner e a opacidade das imagens
function atualizarBanner() {
  // Calcula o valor de translação para o banner com base no índice do item atual
  const translateValue = -currentItemIndex * carouselImages[0].clientWidth;

  // Atualiza a propriedade CSS para mover o banner horizontalmente
  carouselItems.style.transform = `translateX(${translateValue}px)`;

  // Define a opacidade de cada imagem com base no índice do item atual
  carouselImages.forEach((image, index) => {
    image.style.opacity = index === currentItemIndex ? 1 : 0.2;
  });
}

// Função para avançar automaticamente os itens do carrossel
function avancarAutomaticamente() {
  autoPlayInterval = setInterval(() => {
    // Verifica se o mouse não está sobre a seção do carrossel
    if (!carrosselSection.matches(':hover')) {
      // Calcula o próximo índice do item a exibir
      currentItemIndex = (currentItemIndex + 1) % numItems;

      // Chama a função para atualizar o banner
      atualizarBanner();
    }
  }, 5000); // Intervalo de 5000 milissegundos (5 segundos)
}

// Função para parar o avanço automático dos itens do carrossel
function pararAvancoAutomatico() {
  clearInterval(autoPlayInterval);
}

// Adiciona um ouvinte de evento para o clique no botão "Anterior"
document.querySelector('#prevButton').addEventListener('click', () => {
  // Calcula o próximo índice do item a exibir, retrocedendo no ciclo se necessário
  currentItemIndex = (currentItemIndex - 1 + numItems) % numItems;
  // Chama a função para atualizar o banner
  atualizarBanner();
});

// Adiciona um ouvinte de evento para o clique no botão "Próximo"
document.querySelector('#nextButton').addEventListener('click', () => {
  // Calcula o próximo índice do item a exibir, avançando no ciclo
  currentItemIndex = (currentItemIndex + 1) % numItems;
  // Chama a função para atualizar o banner
  atualizarBanner();
});

// Adiciona um ouvinte de evento para quando o mouse está sobre o carrossel
carrosselSection.addEventListener('mouseover', pararAvancoAutomatico);

// Adiciona um ouvinte de evento para quando o mouse sai do carrossel
carrosselSection.addEventListener('mouseout', avancarAutomaticamente);

// Inicia a reprodução automática do carrossel
avancarAutomaticamente();

// Chama a função para atualizar o banner inicialmente
atualizarBanner();