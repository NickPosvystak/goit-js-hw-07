import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')

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

galleryList.addEventListener("click", onClick)

function onClick(event) {
    event.preventDefault();
    
    const instance = basicLightbox.create(`
<img src="${original}" width="1200" height="800">
    `);
    
    instance.show();
}



