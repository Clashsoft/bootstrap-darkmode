# Bootstrap Dark Mode

This project provides a stylesheet and two scripts that allow you to implement Dark Mode on your website.
It is initially loaded based on user preference, can be toggled via a switch, and is saved via `localStorage`.

You can view the [test page](testpage.html) with all default bootstrap components in light and dark
(thanks to [juzraai](https://juzraai.github.io/)!).

Note that not all components are fully supported yet.
Mostly the contextual color classes can cause problems.

## Usage

### With NPM/Yarn/PNPM

Install the [npm package](https://www.npmjs.com/package/bootstrap-darkmode):

```sh
$ npm install bootstrap-darkmode
$ yarn install bootstrap-darkmode
$ pnpm install bootstrap-darkmode
```

Include the stylesheet, e.g. in `styles.scss`:

```scss
@import "~bootstrap-darkmode/darktheme";
```

### Via app.clashsoft.de

1. Put the stylesheet link in `<head>`. Do not forget to add bootstrap.

    ```html
    <head>
        <!-- ... -->
        <!-- Bootstrap CSS ... -->
    
        <!-- Dark mode CSS -->
        <link rel="stylesheet" href="darkmode/darktheme.css"/>
        <!-- or the full URL: -->
        <link rel="stylesheet" href="https://app.clashsoft.de/darkmode/darktheme.css"/>
        <!-- ... -->
    </head>
    ```

2. Load the theme script as the first thing in `<body>`.

    ```html
    <body>
    <script src="darkmode/theme.js"></script>
    <!-- or the full URL: -->
    <script src="https://app.clashsoft.de/darkmode/theme.js"></script>
    <!-- ... --->
    ```

3. Load the switch before you add the element:

    ```html
    <script src="darkmode/darkswitch.js"></script>
    <!-- or the full URL: -->
    <script src="https://app.clashsoft.de/darkmode/darkswitch.js"></script>
    ```

## Setup

### Theme

As soon as possible after `<body>`, initialize the config and load the theme:

```js
const themeConfig = new ThemeConfig();
// place customizations here
themeConfig.initTheme();
```

Loading the theme early shortens the time until the white default background becomes dark.

### Dark Switch

If you want to use the default dark switch, load the switch script and add the element using this code:

```js
// this will write the html to the document and return the element.
const darkSwitch = writeDarkSwitch(themeConfig);
```

## Configuration

You can listen to theme changes by registering a callback with `themeChangeHandlers`:

```js
config.themeChangeHandlers.push(theme => console.log(`using theme: ${theme}`));
```

To change the way the theme is persisted, you can change the `loadTheme` and `saveTheme` functions:

```js
themeConfig.loadTheme = () => {
    // custom logic
    return 'dark';
};

themeConfig.saveTheme = theme => {
    // custom logic
    console.log(theme);
};
```
