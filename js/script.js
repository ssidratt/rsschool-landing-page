// =========================
// THEME
// =========================

const themeButton = document.querySelector('.header-theme');
const logo = document.querySelector('.header-logo img');

function applyTheme(theme) {
	const isDark = theme === 'dark';

	document.body.classList.toggle('dark-theme', isDark);

	if (logo) {
		logo.src = isDark
			? 'icons/dark-logo.svg'
			: 'icons/logo.svg';
	}
}

const savedTheme = localStorage.getItem('theme') || 'light';

applyTheme(savedTheme);

themeButton?.addEventListener('click', () => {
	const newTheme = document.body.classList.contains('dark-theme')
		? 'light'
		: 'dark';

	applyTheme(newTheme);
	localStorage.setItem('theme', newTheme);
});


// =========================
// MENU TABS
// =========================

const tabButtons = document.querySelectorAll('.menu-tabs-button');
const menuLists = document.querySelectorAll('.menu-list');

tabButtons.forEach((button, index) => {
	button.addEventListener('click', () => {
		tabButtons.forEach((tab) => {
			tab.classList.remove('menu-tabs-button-active');
		});

		menuLists.forEach((list) => {
			list.classList.remove('menu-list-active');
		});

		button.classList.add('menu-tabs-button-active');

		if (menuLists[index]) {
			menuLists[index].classList.add('menu-list-active');
		}
	});
});


// =========================
// FAVORITE COFFEE SLIDER
// =========================

const sliderCards = document.querySelectorAll('.favorite-coffee-card');
const sliderControls = document.querySelectorAll('.favorite-coffee-control');

const prevButton = document.querySelector('.favorite-coffee-button-left');
const nextButton = document.querySelector('.favorite-coffee-button-right');

let currentSlide = 0;

function showSlide(index) {
	if (!sliderCards.length) {
		return;
	}

	sliderCards.forEach((card, cardIndex) => {
		card.classList.toggle(
			'favorite-coffee-card-active',
			cardIndex === index
		);
	});

	sliderControls.forEach((control, controlIndex) => {
		control.classList.toggle(
			'favorite-coffee-control-active',
			controlIndex === index
		);
	});
}

function nextSlide() {
	if (!sliderCards.length) {
		return;
	}

	currentSlide = (currentSlide + 1) % sliderCards.length;
	showSlide(currentSlide);
}

function prevSlide() {
	if (!sliderCards.length) {
		return;
	}

	currentSlide =
		(currentSlide - 1 + sliderCards.length) %
		sliderCards.length;

	showSlide(currentSlide);
}

nextButton?.addEventListener('click', nextSlide);
prevButton?.addEventListener('click', prevSlide);

if (sliderCards.length) {
	showSlide(currentSlide);
}


// =========================
// BURGER MENU
// =========================

const burgerButton = document.querySelector('.header-menu-burger');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header-nav');
const headerActions = document.querySelector('.header-actions');

function closeBurgerMenu() {
	if (!burgerButton || !header) {
		return;
	}

	header.classList.remove('header-menu-open');

	burgerButton.classList.remove('header-menu-burger-active');
	burgerButton.setAttribute('aria-expanded', 'false');

	document.body.classList.remove('menu-open');
}

burgerButton?.setAttribute('aria-expanded', 'false');

burgerButton?.addEventListener('click', () => {
	const isOpen = header.classList.toggle('header-menu-open');

	burgerButton.classList.toggle(
		'header-menu-burger-active',
		isOpen
	);

	burgerButton.setAttribute(
		'aria-expanded',
		String(isOpen)
	);

	document.body.classList.toggle('menu-open', isOpen);
});

headerNav?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', closeBurgerMenu);
});

headerActions?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', closeBurgerMenu);
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 1000) {
		closeBurgerMenu();
	}
});