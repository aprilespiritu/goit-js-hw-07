import { galleryItems } from './gallery-items.js';
// Change code below this line

let gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
	let li = `
    <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
        </a>
    </li>
    `;
	gallery.innerHTML += li;
});