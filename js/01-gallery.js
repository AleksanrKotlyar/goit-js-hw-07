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
	const currentImageUrl = e.target.dataset.source;

	const instance = basicLightbox.create(
		`
		<img class="modal__image" src="${currentImageUrl}" />`,
		{
			onShow: () => {
				window.addEventListener("keydown", onKeyPress);
			},
			onClose: () => {
				window.removeEventListener("keydown", onKeyPress);
			},
		}
	);

	instance.show();

	function onKeyPress(event) {
		const isKeyCode = event.code === "Escape";
		if (isKeyCode) {
			instance.close();
		}
	}

	// 	const instance = basicLightbox.create(`
	//     <div class="modal">
	//         <img
	//       class="gallery__image"
	//       src="${urlImg}"
	//       data-source="${e.target.getAttribute("data-source")}"
	//       alt="${e.target.getAttribute("alt")}"
	//     />
	//     </div>
	// `);

	// 	instance.show(() => {
	// 		window.addEventListener("keydown", onEscPress);
	// 		window.addEventListener("click", onEscPress);
	// 	});

	// 	function onEscPress(evt) {
	// 		if (evt.code === "Escape") {
	// 			console.log("Escape");
	// 			instance.close(() => {
	// 				window.removeEventListener("keydown", onEscPress);
	// 				window.addEventListener("click", onEscPress);
	// 			});
	// 		} else {
	// 			instance.close(() => {
	// 				window.removeEventListener("keydown", onEscPress);
	// 				window.removeEventListener("click", onEscPress);
	// 			});
	// 		}
	// 	}
}

galleryRef.addEventListener("click", onClickImgCreateModal);

console.log(galleryItems);
