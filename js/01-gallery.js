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
  
  const target = event.target;
  if (target.nodeName !== 'IMG')
    return;

  const instance = basicLightbox.create(`
  <img src="${target.dataset.source}" width="800" height="600">
  `,

    {
      onShow: (instance) => {
        // Додаємо обробник клавіатури при відкритті модального вікна
        const closeModalOnEsc = (event) => {
          if (event.key === 'Escape') {
            instance.close();
          }
        };
        document.body.addEventListener("keydown", closeModalOnEsc);
      },
   

  

        }  
      // onClose: (instance) => {
      //   // Знімаємо обробник клавіатури при закритті модального вікна
      //   document.body.removeEventListener('keydown', closeModalOnEscape);
          
      );
      
      instance.show();
}
    // }
