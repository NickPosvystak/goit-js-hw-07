import { galleryItems } from "./gallery-items.js";


const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", onClick);

const galleriItems = ({ preview, original, description }) => {
  return `  <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
};

const render = (galleryItems) => {
  const galleryMarkup = galleryItems.map((item) => galleriItems(item)).join("");

  galleryList.innerHTML = galleryMarkup;
};

render(galleryItems);

function onClick(event) {
  event.preventDefault();
  for (let i = 0; i < galleryItems.length; i += 1) {
    if (event.target.getAttribute("src") === galleryItems[i].preview) {
      const instance = basicLightbox.create(`
  <img src="${galleryItems[i].original}" width="800" height="600">
  `);
      document.body.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
    instance.close();
  }
})
      instance.show();
    }
  }
}
