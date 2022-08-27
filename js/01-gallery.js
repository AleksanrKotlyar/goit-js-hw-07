import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const GalleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return ` 
     <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
		})
		.join("");
}

galleryRef.insertAdjacentHTML("beforeend", GalleryMarkup);

function onClickImgCreateModal(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) return;
	const urlImg = e.target.getAttribute("data-source");

	const instance = basicLightbox.create(`
    <div class="modal">
        <img
      class="gallery__image"
      src="${urlImg}"
      data-source="${e.target.getAttribute("data-source")}"
      alt="${e.target.getAttribute("alt")}"
    />
    </div>
`);

	instance.show(() => {
		window.addEventListener("keydown", onEscPress);
		window.addEventListener("click", onEscPress);
	});

	function onEscPress(evt) {
		if (evt.code === "Escape") {
			instance.close(() => {
				window.removeEventListener("keydown", onEscPress);
			});
		} else {
			instance.close(() => {
				window.removeEventListener("keydown", onEscPress);
				window.removeEventListener("click", onEscPress);
			});
		}
	}
}

galleryRef.addEventListener("click", onClickImgCreateModal);

console.log(galleryItems);
