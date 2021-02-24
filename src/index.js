import './styles.css';
import searchListOfImages from './templating/searchListOfImages.hbs';
import imageStats from './templating/imageStats.hbs';
import apiService from './js/apiService';
import errorNotification from './js/errorNotification';
import observerLoad from './js/observerLoad';
import observerImage from './js/observerImage';
import openModal from './js/modal';

const body = document.body;
const input = searchListOfImages();
body.insertAdjacentHTML('afterbegin', input);
const searchForm = document.querySelector('.search-form');


const listContent = document.createElement('ul');
listContent.classList.add('gallery');
body.append(listContent);
const listImages = document.querySelector('.gallery');

searchForm.addEventListener('submit', Search);
listImages.addEventListener('click', openModal);

function Content() {
  apiService
    .fetchImages()
    .then(dataImages => {
      if (dataImages.length === 0) {
          errorRequest();
          return;
      }
      updateListImages(dataImages);
    })
    .catch(error => console.log(error));
}

function Search(img) {
  img.preventDefault();

  const formImg = img.currentTarget;
  apiService.query = formImg.elements.query.value;

  listImages.innerHTML = '';
  apiService.pagerestart();
  if (formImg.elements.query.value === '') {
    errorNotification();
    return;
  };
  Content();
  formImg.elements.query.value = '';
}

function updateListImages(infoImages) {
  const contentImages = imageStats(infoImages);
  listImages.insertAdjacentHTML('beforeend', contentImages);
  observerLoad(Content);
  observerImage();
}
