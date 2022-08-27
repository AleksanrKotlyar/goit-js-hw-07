import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryRef = document.querySelector(".gallery");
// galleryRef.addEventListener("click", oncClickImgSliderOpen);
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `
      <li>
    <a class="gallery__item" href="${original}">
	<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
    `;
		})
		.join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
// function oncClickImgSliderOpen(e) {
// 	e.preventDefault();
// 	if (!e.target.classList.contains("gallery__image")) return;
// 	var lightbox = new SimpleLightbox(".gallery a", {
// 		captionsData: "alt",
// 		captionDelay: 250,
// 	});
// }

console.log(galleryItems);
