import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");

const photosMarkup = createGalleryItem(galleryItems);

//Photo Gallery
function createGalleryItem(array) {
    return array.map(({ preview, original, description }) => {
        return `
            <a class='gallery__item' href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
    })
    .join(" ");
}

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

//Simple Lightbox

const galleryHandler = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

galleryHandler.on("show.simplelightbox");