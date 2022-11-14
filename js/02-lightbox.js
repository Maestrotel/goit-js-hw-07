import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBlock = document.querySelector('.gallery');

function createGallaryMark(pictures) {
  return pictures.map((picture) => `
      <li class="gallery__item">
        <a class="gallery__item" href="${picture.original}">
          <img
            class="gallery__image"
            src="${picture.preview}"
            alt="${picture.description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const addGallaryMark = createGallaryMark(galleryItems);

galleryBlock.innerHTML = addGallaryMark;

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
