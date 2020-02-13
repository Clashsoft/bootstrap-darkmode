declare let loadTheme: () => string;
declare let saveTheme: (string) => void;

declare const themeChangeHandlers: ((theme: string) => void)[];

// =============== Methods ===============

declare function initTheme(): void;

declare function getTheme(): string;
declare function setTheme(theme: string): void;

declare function displayTheme(theme: string): void;
