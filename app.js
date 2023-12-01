const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

let i = -1;
let currentIndex = -1;
const gallery = document.querySelector(".js-gallery");
const images = galleryItems.map((image) => {
    i++;
    return (
      `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${image.original}"
        >
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            data-index="${i}"
          />
        </a>
      </li>`
    );
}).join("");
gallery.innerHTML = images;

const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
gallery.addEventListener("click", (e) => {
    e.preventDefault();
    lightbox.classList.add("is-open");
    lightboxImage.src = e.target.dataset.source;
    currentIndex = Number(e.target.dataset.index);
});

function closeModal() {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
    currentIndex = -1;
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        closeModal();
        return;
    }
    if (e.code === "ArrowRight") {
        if (currentIndex !== -1 && currentIndex !== galleryItems.length - 1) {
            currentIndex += 1;
            lightboxImage.src = galleryItems[currentIndex].original;
        }
    }
    if (e.code === "ArrowLeft") {
        if (currentIndex !== -1 && currentIndex !== 0) {
            currentIndex -= 1;
            lightboxImage.src = galleryItems[currentIndex].original;
        }
    }
});
const lightboxOverlay = document.querySelector(".lightbox__overlay");
const closeBtn = document.querySelector('[data-action="close-lightbox"]');

lightboxOverlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);