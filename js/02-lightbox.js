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

galleryList.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "bottom",
  captionDelay: "250",
  captionsData: "alt",
});
