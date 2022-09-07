import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');// !

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);// !

// ! 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
};

galleryContainerEl.addEventListener('click', openModal);

// ! 2. Реалізація делегування на div.gallery і отримання url великого зображення + відключення переходу на нову сторінку при кліку на лінк
function openModal(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }

  const dataSource = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${dataSource}">`,
  );
 
  instance.show();
}

// ! 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// додала в head i body відповідні link i script, додала в проект папку dist з файлами min.js i min.css

// ! 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// приклад: 

// import * as basicLightbox from 'basiclightbox'
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)
// instance.show()


