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
		const isDark = document.body.classList.contains("dark-theme");

		const newTheme = isDark ? "light" : "dark";

		localStorage.setItem("theme", newTheme);

		applyTheme(newTheme);
	});
}


// =========================
// MENU TABS
// =========================

const tabButtons = document.querySelectorAll(".menu-tabs-button");
const menuLists = document.querySelectorAll(".menu-list");
const menuMoreButton = document.querySelector(".menu-more-button");

function resetMenuCards() {
	menuLists.forEach((list) => {
		list.classList.remove("menu-list-expanded");
	});
}

function updateMoreButton() {
	if (!menuMoreButton) {
		return;
	}

	const activeList = document.querySelector(".menu-list-active");

	if (!activeList) {
		menuMoreButton.style.display = "none";
		return;
	}

	const cards = activeList.querySelectorAll(".menu-card");

	if (window.innerWidth <= 768 && cards.length > 4) {
		menuMoreButton.style.display = "flex";
	} else {
		menuMoreButton.style.display = "none";
	}
}

tabButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const selectedTab = button.dataset.tab;

		tabButtons.forEach((tabButton) => {
			tabButton.classList.remove("menu-tabs-button-active");
		});

		button.classList.add("menu-tabs-button-active");

		menuLists.forEach((list) => {
			list.classList.remove("menu-list-active");
			list.classList.remove("menu-list-expanded");
		});

		const selectedList = document.querySelector(
			`.menu-${selectedTab}`
		);

		if (selectedList) {
			selectedList.classList.add("menu-list-active");
		}

		updateMoreButton();
	});
});

if (menuMoreButton) {
	menuMoreButton.addEventListener("click", () => {
		const activeList = document.querySelector(".menu-list-active");

		if (!activeList) {
			return;
		}

		activeList.classList.add("menu-list-expanded");

		updateMoreButton();
	});
}


// =========================
// FAVORITE COFFEE SLIDER
// =========================

const coffeeCards = document.querySelectorAll(".favorite-coffee-card");
const coffeeControls = document.querySelectorAll(".favorite-coffee-control");

const previousButton = document.querySelector(
	".favorite-coffee-button-prev"
);

const nextButton = document.querySelector(
	".favorite-coffee-button-next"
);

let currentSlide = 0;

function showSlide(index) {
	if (!coffeeCards.length) {
		return;
	}

	coffeeCards.forEach((card) => {
		card.classList.remove("favorite-coffee-card-active");
	});

	coffeeControls.forEach((control) => {
		control.classList.remove("favorite-coffee-control-active");
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

	currentSlide = (currentSlide + 1) % coffeeCards.length;

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
	previousButton.addEventListener("click", previousSlide);
}

if (nextButton) {
	nextButton.addEventListener("click", nextSlide);
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

const burgerButton = document.querySelector(".header-menu-burger");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header-nav");
const headerActions = document.querySelector(".header-actions");

function closeBurgerMenu() {
	if (!burgerButton || !header) {
		return;
	}

	header.classList.remove("header-menu-open");

	burgerButton.classList.remove(
		"header-menu-burger-active"
	);

	burgerButton.setAttribute("aria-expanded", "false");
	burgerButton.setAttribute("aria-label", "Open menu");

	document.body.classList.remove("menu-open");
}

if (burgerButton && header) {
	burgerButton.addEventListener("click", () => {
		const isOpen = header.classList.toggle(
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
			isOpen ? "Close menu" : "Open menu"
		);

		document.body.classList.toggle(
			"menu-open",
			isOpen
		);
	});
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


// Закрываем burger по Escape
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeBurgerMenu();
	}
});


// =========================
// PRODUCT CARDS
// =========================

function createProductCard(product) {
	const card = document.createElement("article");

	card.classList.add("menu-card");

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

	return card;
}


function renderProducts() {
	const productLists =
		document.querySelectorAll(".menu-list");

	productLists.forEach((list) => {
		const category = list.dataset.category;

		if (!category) {
			return;
		}

		const categoryProducts = products.filter(
			(product) =>
				product.category === category
		);

		list.innerHTML = "";

		categoryProducts.forEach((product) => {
			const card = createProductCard(product);

			list.append(card);
		});
	});
}


// Запускаем генерацию только на странице Menu
if (
	typeof products !== "undefined" &&
	document.querySelector(".menu-list")
) {
	renderProducts();
	updateMoreButton();
}


// =========================
// RESIZE
// =========================

window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		closeBurgerMenu();
	}

	resetMenuCards();
	updateMoreButton();
});