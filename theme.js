// --------------- Customization Points ---------------

// Declare these methods before loading this script to override them.

loadTheme = typeof loadTheme === 'function' ? loadTheme : () => localStorage.getItem('theme');
saveTheme = typeof saveTheme === 'function' ? saveTheme : theme => localStorage.setItem('theme', theme);

const themeChangeHandlers = [];

// =============== Initialization ===============

initTheme();

// =============== Methods ===============

// adapted from https://github.com/coliff/dark-mode-switch

function initTheme() {
	displayTheme(getTheme());
}

function getTheme() {
	return loadTheme() || (window.matchMedia(
		'(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
	saveTheme(theme);
	displayTheme(theme);
}

function displayTheme(theme) {
	document.body.setAttribute('data-theme', theme);
	for (let handler of themeChangeHandlers) {
		handler(theme);
	}
}
