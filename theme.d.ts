declare class ThemeConfig {
    loadTheme: () => string;
    saveTheme: (string) => void;

    getTheme(): string;
    setTheme(theme: string): void;

    themeChangeHandlers: ((theme: string) => void)[];
}
