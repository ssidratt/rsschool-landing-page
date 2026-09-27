// =========================
// THEME
// =========================

const themeButton = document.querySelector(".header-theme");
const logo = document.querySelector(".header-logo img");

function applyTheme(theme) {
	const isDark = theme === "dark";

	document.body.classList.toggle("dark-theme", isDark);

	if (logo) {
		logo.src = isDark
			? "icons/dark-logo.svg"
			: "icons/logo.svg";
	}
}

const savedTheme = localStorage.getItem("theme") || "light";

applyTheme(savedTheme);

if (themeButton) {
	themeButton.addEventListener("click", () => {
		const isDark =
			document.body.classList.contains("dark-theme");

		const newTheme = isDark ? "light" : "dark";

		localStorage.setItem("theme", newTheme);

		applyTheme(newTheme);
	});
}


// =========================
// MENU TABS
// =========================

const tabButtons =
	document.querySelectorAll(".menu-tabs-button");

const menuLists =
	document.querySelectorAll(".menu-list");

const menuMoreButton =
	document.querySelector(".menu-more-button");


function resetMenuCards() {
	menuLists.forEach((list) => {
		list.classList.remove("menu-list-expanded");
	});
}


function updateMoreButton() {
	if (!menuMoreButton) {
		return;
	}

	const activeList =
		document.querySelector(".menu-list-active");

	if (!activeList) {
		menuMoreButton.style.display = "none";
		return;
	}

	const cards =
		activeList.querySelectorAll(".menu-card");

	if (
		window.innerWidth <= 768 &&
		cards.length > 4 &&
		!activeList.classList.contains("menu-list-expanded")
	) {
		menuMoreButton.style.display = "flex";
	} else {
		menuMoreButton.style.display = "none";
	}
}


tabButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const selectedTab = button.dataset.tab;

		tabButtons.forEach((tabButton) => {
			tabButton.classList.remove(
				"menu-tabs-button-active"
			);
		});

		button.classList.add(
			"menu-tabs-button-active"
		);

		menuLists.forEach((list) => {
			list.classList.remove(
				"menu-list-active"
			);

			list.classList.remove(
				"menu-list-expanded"
			);
		});

		const selectedList =
			document.querySelector(
				`.menu-${selectedTab}`
			);

		if (selectedList) {
			selectedList.classList.add(
				"menu-list-active"
			);
		}

		updateMoreButton();
	});
});


if (menuMoreButton) {
	menuMoreButton.addEventListener("click", () => {
		const activeList =
			document.querySelector(
				".menu-list-active"
			);

		if (!activeList) {
			return;
		}

		activeList.classList.add(
			"menu-list-expanded"
		);

		updateMoreButton();
	});
}


// =========================
// FAVORITE COFFEE SLIDER
// =========================

const coffeeCards =
	document.querySelectorAll(".favorite-coffee-card");

const coffeeControls =
	document.querySelectorAll(".favorite-coffee-control");

const previousButton =
	document.querySelector(".favorite-coffee-button-left");

const nextButton =
	document.querySelector(".favorite-coffee-button-right");

let currentSlide = 0;


function showSlide(index) {
	if (!coffeeCards.length) {
		return;
	}

	coffeeCards.forEach((card) => {
		card.classList.remove(
			"favorite-coffee-card-active"
		);
	});

	coffeeControls.forEach((control) => {
		control.classList.remove(
			"favorite-coffee-control-active"
		);
	});

	coffeeCards[index].classList.add(
		"favorite-coffee-card-active"
	);

	if (coffeeControls[index]) {
		coffeeControls[index].classList.add(
			"favorite-coffee-control-active"
		);
	}
}


function nextSlide() {
	if (!coffeeCards.length) {
		return;
	}

	currentSlide =
		(currentSlide + 1) % coffeeCards.length;

	showSlide(currentSlide);
}


function previousSlide() {
	if (!coffeeCards.length) {
		return;
	}

	currentSlide =
		(currentSlide - 1 + coffeeCards.length) %
		coffeeCards.length;

	showSlide(currentSlide);
}


if (previousButton) {
	previousButton.addEventListener(
		"click",
		previousSlide
	);
}


if (nextButton) {
	nextButton.addEventListener(
		"click",
		nextSlide
	);
}


coffeeControls.forEach((control, index) => {
	control.addEventListener("click", () => {
		currentSlide = index;

		showSlide(currentSlide);
	});
});


// =========================
// BURGER MENU
// =========================

const burgerButton =
	document.querySelector(".header-menu-burger");

const header =
	document.querySelector(".header");

const headerNav =
	document.querySelector(".header-nav");

const headerActions =
	document.querySelector(".header-actions");


function closeBurgerMenu() {
	if (!burgerButton || !header) {
		return;
	}

	header.classList.remove(
		"header-menu-open"
	);

	burgerButton.classList.remove(
		"header-menu-burger-active"
	);

	burgerButton.setAttribute(
		"aria-expanded",
		"false"
	);

	burgerButton.setAttribute(
		"aria-label",
		"Open menu"
	);

	document.body.classList.remove(
		"menu-open"
	);
}


if (burgerButton && header) {
	burgerButton.addEventListener(
		"click",
		() => {
			const isOpen =
				header.classList.toggle(
					"header-menu-open"
				);

			burgerButton.classList.toggle(
				"header-menu-burger-active",
				isOpen
			);

			burgerButton.setAttribute(
				"aria-expanded",
				String(isOpen)
			);

			burgerButton.setAttribute(
				"aria-label",
				isOpen
					? "Close menu"
					: "Open menu"
			);

			document.body.classList.toggle(
				"menu-open",
				isOpen
			);
		}
	);
}


if (headerNav) {
	const navigationLinks =
		headerNav.querySelectorAll("a");

	navigationLinks.forEach((link) => {
		link.addEventListener(
			"click",
			closeBurgerMenu
		);
	});
}


if (headerActions) {
	const actionLinks =
		headerActions.querySelectorAll("a");

	actionLinks.forEach((link) => {
		link.addEventListener(
			"click",
			closeBurgerMenu
		);
	});
}


// =========================
// PRODUCT MODAL
// =========================

let productModal = null;


function closeProductModal() {
	if (!productModal) {
		return;
	}

	productModal.remove();
	productModal = null;

	document.body.classList.remove(
		"modal-open"
	);
}


function createOptionButton(
	value,
	text,
	active = false
) {
	const button =
		document.createElement("button");

	button.type = "button";

	button.className =
		"product-modal-option";

	if (active) {
		button.classList.add(
			"product-modal-option-active"
		);
	}

	button.innerHTML = `
		<span class="product-modal-option-number">
			${value}
		</span>

		<span class="product-modal-option-text">
			${text}
		</span>
	`;

	return button;
}


function openProductModal(product) {
	closeProductModal();

	let selectedSize = "s";

	const selectedAdditives =
		new Set();


	// =========================
	// OVERLAY
	// =========================

	productModal =
		document.createElement("div");

	productModal.className =
		"product-modal-overlay";


	// =========================
	// MODAL
	// =========================

	const modal =
		document.createElement("div");

	modal.className =
		"product-modal";

	modal.setAttribute(
		"role",
		"dialog"
	);

	modal.setAttribute(
		"aria-modal",
		"true"
	);

	modal.setAttribute(
		"aria-label",
		product.name
	);


	// =========================
	// IMAGE
	// =========================

	const imageWrapper =
		document.createElement("div");

	imageWrapper.className =
		"product-modal-image-wrapper";

	const image =
		document.createElement("img");

	image.className =
		"product-modal-image";

	image.src = product.image;
	image.alt = product.name;

	imageWrapper.append(image);


	// =========================
	// CONTENT
	// =========================

	const content =
		document.createElement("div");

	content.className =
		"product-modal-content";


	const title =
		document.createElement("h2");

	title.className =
		"product-modal-title";

	title.textContent =
		product.name;


	const description =
		document.createElement("p");

	description.className =
		"product-modal-description";

	description.textContent =
		product.description;


	// =========================
	// SIZE
	// =========================

	const sizeBlock =
		document.createElement("div");

	sizeBlock.className =
		"product-modal-group";


	const sizeLabel =
		document.createElement("p");

	sizeLabel.className =
		"product-modal-label";

	sizeLabel.textContent = "Size";


	const sizeOptions =
		document.createElement("div");

	sizeOptions.className =
		"product-modal-options";


	const sizeLetters = {
		s: "S",
		m: "M",
		l: "L"
	};


	Object.entries(product.sizes).forEach(
		([sizeKey, sizeData]) => {

			const button =
				createOptionButton(
					sizeLetters[sizeKey],
					sizeData.size,
					sizeKey === "s"
				);

			button.dataset.size =
				sizeKey;


			button.addEventListener(
				"click",
				() => {
					selectedSize =
						sizeKey;

					const buttons =
						sizeOptions.querySelectorAll(
							".product-modal-option"
						);

					buttons.forEach(
						(optionButton) => {
							optionButton.classList.remove(
								"product-modal-option-active"
							);
						}
					);

					button.classList.add(
						"product-modal-option-active"
					);

					updateTotal();
				}
			);


			sizeOptions.append(
				button
			);
		}
	);


	sizeBlock.append(
		sizeLabel,
		sizeOptions
	);


	// =========================
	// ADDITIVES
	// =========================

	const additivesBlock =
		document.createElement("div");

	additivesBlock.className =
		"product-modal-group";


	const additivesLabel =
		document.createElement("p");

	additivesLabel.className =
		"product-modal-label";

	additivesLabel.textContent =
		"Additives";


	const additivesOptions =
		document.createElement("div");

	additivesOptions.className =
		"product-modal-options";


	product.additives.forEach(
		(additive, index) => {

			const button =
				createOptionButton(
					index + 1,
					additive.name
				);

			button.dataset.additive =
				String(index);


			button.addEventListener(
				"click",
				() => {

					if (
						selectedAdditives.has(
							index
						)
					) {
						selectedAdditives.delete(
							index
						);

						button.classList.remove(
							"product-modal-option-active"
						);
					} else {
						selectedAdditives.add(
							index
						);

						button.classList.add(
							"product-modal-option-active"
						);
					}

					updateTotal();
				}
			);


			additivesOptions.append(
				button
			);
		}
	);


	additivesBlock.append(
		additivesLabel,
		additivesOptions
	);


	// =========================
	// TOTAL
	// =========================

	const total =
		document.createElement("div");

	total.className =
		"product-modal-total";


	const totalLabel =
		document.createElement("span");

	totalLabel.textContent =
		"Total:";


	const totalPrice =
		document.createElement("span");

	totalPrice.className =
		"product-modal-total-price";


	function updateTotal() {
		let totalValue =
			product.price;

		totalValue +=
			product.sizes[
				selectedSize
			].addPrice;

		selectedAdditives.forEach(
			(index) => {
				totalValue +=
					product.additives[
						index
					].addPrice;
			}
		);

		totalPrice.textContent =
			`$${totalValue.toFixed(2)}`;
	}


	updateTotal();


	total.append(
		totalLabel,
		totalPrice
	);


	// =========================
	// INFO
	// =========================

	const info =
		document.createElement("div");

	info.className =
		"product-modal-info";

	info.innerHTML = `
		<span class="product-modal-info-icon">
			i
		</span>

		<p>
			The cost is not final.
			Download our mobile app to see
			the final price and place your order.
			Earn loyalty points and enjoy
			your favorite coffee with up to
			20% discount.
		</p>
	`;


	// =========================
	// CLOSE
	// =========================

	const closeButton =
		document.createElement("button");

	closeButton.type =
		"button";

	closeButton.className =
		"product-modal-close";

	closeButton.textContent =
		"Close";


	closeButton.addEventListener(
		"click",
		closeProductModal
	);


	// =========================
	// ASSEMBLE
	// =========================

	content.append(
		title,
		description,
		sizeBlock,
		additivesBlock,
		total,
		info,
		closeButton
	);


	modal.append(
		imageWrapper,
		content
	);


	productModal.append(
		modal
	);


	document.body.append(
		productModal
	);


	document.body.classList.add(
		"modal-open"
	);


	// Закрытие по overlay

	productModal.addEventListener(
		"click",
		(event) => {

			if (
				event.target ===
				productModal
			) {
				closeProductModal();
			}
		}
	);
}


// =========================
// PRODUCT CARDS
// =========================

function createProductCard(product) {

	const card =
		document.createElement("article");

	card.classList.add(
		"menu-card"
	);

	card.tabIndex = 0;

	card.setAttribute(
		"role",
		"button"
	);

	card.setAttribute(
		"aria-label",
		`Open ${product.name}`
	);


	card.innerHTML = `
		<img
			class="menu-card-image"
			src="${product.image}"
			alt="${product.name}"
		>

		<h2 class="menu-card-title">
			${product.name}
		</h2>

		<p class="menu-card-description">
			${product.description}
		</p>

		<p class="menu-card-price">
			$${product.price.toFixed(2)}
		</p>
	`;


	card.addEventListener(
		"click",
		() => {
			openProductModal(
				product
			);
		}
	);


	card.addEventListener(
		"keydown",
		(event) => {

			if (
				event.key === "Enter" ||
				event.key === " "
			) {
				event.preventDefault();

				openProductModal(
					product
				);
			}
		}
	);


	return card;
}


// =========================
// RENDER PRODUCTS
// =========================

function renderProducts() {

	const productLists =
		document.querySelectorAll(
			".menu-list"
		);


	productLists.forEach(
		(list) => {

			const category =
				list.dataset.category;


			if (!category) {
				return;
			}


			const categoryProducts =
				products.filter(
					(product) =>
						product.category ===
						category
				);


			list.innerHTML = "";


			categoryProducts.forEach(
				(product) => {

					const card =
						createProductCard(
							product
						);

					list.append(
						card
					);
				}
			);
		}
	);
}


// Запускаем товары только на Menu page

if (
	typeof products !== "undefined" &&
	document.querySelector(".menu-list")
) {
	renderProducts();
	updateMoreButton();
}


// =========================
// ESCAPE
// =========================

document.addEventListener(
	"keydown",
	(event) => {

		if (event.key !== "Escape") {
			return;
		}


		if (productModal) {
			closeProductModal();
			return;
		}


		closeBurgerMenu();
	}
);


// =========================
// RESIZE
// =========================

window.addEventListener(
	"resize",
	() => {

		if (
			window.innerWidth > 768
		) {
			closeBurgerMenu();
		}

		resetMenuCards();
		updateMoreButton();
	}
);