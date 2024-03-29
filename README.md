# Bootstrap Darkmode

[![npm version](https://badge.fury.io/js/bootstrap-darkmode.svg)](https://www.npmjs.com/package/bootstrap-darkmode)

> [!Warning]
> Bootstrap v5.3 natively provides a [dark color mode](https://getbootstrap.com/docs/5.3/customize/color-modes/).
> As such, this package will no longer be actively developed.
> Major bugs, security issues and Pull Requests will still be reviewed however.
> Contributions are welcome.

This project provides a stylesheet and two scripts that allow you to implement a dark theme on your website.
It is initially loaded based on user preference, can be toggled via a switch, and is saved via `localStorage`.

You can view the [test page](testpage.html) with all default bootstrap components in light and dark
(thanks to [juzraai](https://juzraai.github.io/)!).

If you are using Angular, check out [ng-bootstrap-darkmode](https://github.com/Clashsoft/ng-bootstrap-darkmode).

## Usage

### With NPM/Yarn/PNPM

Install the [npm package](https://www.npmjs.com/package/bootstrap-darkmode):

```sh
$ npm install bootstrap-darkmode
$ yarn add bootstrap-darkmode
$ pnpm install bootstrap-darkmode
```

Include the stylesheet, e.g. in `styles.scss`:

```scss
@import "~bootstrap-darkmode/scss/darktheme";
```

### Via unpkg.com

1. Put the stylesheet link in `<head>`. Do not forget to add bootstrap.

    ```html
    <head>
        <!-- ... -->
        <!-- Bootstrap CSS ... -->
    
        <!-- Dark mode CSS -->
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-darkmode@0.7.0/css/darktheme.css"/>
        <!-- ... -->
    </head>
    ```

2. Load the theme script as the first thing in `<body>`.

    ```html
    <body>
    <script src="https://unpkg.com/bootstrap-darkmode@0.7.0/bundles/bootstrap-darkmode.umd.js"></script>
    <!-- ... --->
    ```

### Building Yourself

1. Clone this repo.
2. Run `npm build`.
3. Find `darktheme.css` and `theme.js` in the `dist/` directory.
4. Follow the steps for unpkg.com, but replace the links with whatever local paths you put the files in.

## Setup

> If you are using [ng-bootstrap-darkmode](https://github.com/Clashsoft/ng-bootstrap-darkmode),
> you can skip this section entirely.
> It comes with its own JavaScript implementation that is used very differently.

### Import

ES module import:

```js
import {ThemeConfig, writeDarkSwitch} from 'bootstrap-darkmode';
```

Browser:

```js
const bootstrapDarkmode = window['bootstrap-darkmode'];
const ThemeConfig = bootstrapDarkmode.ThemeConfig;
const writeDarkSwitch = bootstrapDarkmode.writeDarkSwitch;
```

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

Bootstrap Darkmode can be configured regarding both colors and the way the JavaScript helper behaves.

### SCSS

Many colors can be changed via SCSS variables, similar to how Bootstrap allows changing the theme.
You can find all variables in [`_variables.scss`](src/scss/_variables.scss).
To change them, just put a new value *before* importing `darktheme.scss`.

```scss
$dark-body-bg: #111;

@import "~bootstrap-darkmode/scss/darktheme";
```

### JavaScript

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
