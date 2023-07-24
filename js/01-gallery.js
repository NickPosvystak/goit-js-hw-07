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


let instance = null;

function onClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== "IMG") return;

  const source = event.target.dataset.source;

  instance = basicLightbox.create(
    `
  <img src="${source}" width="800" height="600">
  `,

    {
      onShow: () => {
        document.body.addEventListener("keydown", closeModalOnEsc);
      },

      onClose: () => {
        document.body.removeEventListener("keydown", closeModalOnEsc);
        instance = null;
      },
    }
  );

  instance.show();
}

function closeModalOnEsc(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}

