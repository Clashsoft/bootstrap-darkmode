declare class ThemeConfig {
    loadTheme: () => string;
    saveTheme: (string) => void;
    themeChangeHandlers: ((theme: string) => void)[];

    initTheme(): void;
    getTheme(): string;
    setTheme(theme: string): void;
}
