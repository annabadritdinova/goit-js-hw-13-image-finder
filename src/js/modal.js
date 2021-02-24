import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const img = `<img src= ${event.target.dataset.source}>`;
  const instance = basicLightbox.create(img);

  instance.show();
  window.addEventListener('keydown', closeModal);

  
function closeModal(event) {
  if (event.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', closeModal);
  }
}
}

export default openModal