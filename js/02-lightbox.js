import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

function renderGallery() {
  const createElement = galleryItems
    .map(
      (item) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`
    )
    .join("");
  
  galleryList.innerHTML = createElement;
}

renderGallery();

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: "250",
  captionsData: "alt",
});
