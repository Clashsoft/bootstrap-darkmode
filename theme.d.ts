declare class ThemeConfig {
    loadTheme: () => string;
    saveTheme: (string) => void;
    themeChangeHandlers: ((theme: string) => void)[];

    constructor();

    initTheme(): void;
    getTheme(): string;
    setTheme(theme: string): void;
}
