class ThemeConfig {
	constructor() {
		this.loadTheme = () => localStorage.getItem('theme');
		this.saveTheme = theme => localStorage.setItem('theme', theme);
	}

	initTheme() {
		this.displayTheme(this.getTheme());
	}

	getTheme() {
		return this.loadTheme() || (window.matchMedia(
			'(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	}

	setTheme(theme) {
		this.saveTheme(theme);
		this.displayTheme(theme);
	}

	displayTheme(theme) {
		document.body.setAttribute('data-theme', theme);
		for (let handler of themeChangeHandlers) {
			handler(theme);
		}
	}
}
