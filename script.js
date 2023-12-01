const images = [
    'link_para_imagem_1.jpg',
    'link_para_imagem_2.jpg',
    'link_para_imagem_3.jpg',
    // Adicione mais links para as imagens da galeria
  ];
  
  window.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
  
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      gallery.appendChild(img);
    });
  });