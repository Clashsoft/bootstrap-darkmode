export class ThemeConfig {
    themeChangeHandlers: ((theme: string) => void)[] = [];

    loadTheme(): string | null {
        return localStorage.getItem('theme');
    }

    saveTheme(theme: string | null): void {
        if (theme === null) {
            localStorage.removeItem('theme');
        }
        else {
            localStorage.setItem('theme', theme)
        }
    }

    initTheme(): void {
        this.displayTheme(this.getTheme());
    }

    detectTheme(): string {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getTheme(): string {
        return this.loadTheme() || this.detectTheme();
    }

    setTheme(theme: string): void {
        this.saveTheme(theme);
        this.displayTheme(theme);
    }

    displayTheme(theme: string): void {
        document.body.setAttribute('data-theme', theme);
        for (let i = 0; i < this.themeChangeHandlers.length; i++){
            this.themeChangeHandlers[i](theme);
        }
    }
}
