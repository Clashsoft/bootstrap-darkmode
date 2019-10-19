# Bootstrap Dark Mode

This project provides a stylesheet and two scripts that allow you to implement Dark Mode on your website.
It is initially loaded based on user preference, can be toggled via a switch, and is saved via `localStorage`.

## Usage

1. Put the stylesheet link in `<head>`. Do not forget to add bootstrap.

    ```html
    <head>
        <!-- ... -->
        <!-- Bootstrap CSS ... -->
    
        <!-- Dark mode CSS -->
        <link rel="stylesheet" href="darkmode/darktheme.css"/>
        <!-- ... -->
    </head>
    ```

2. Load the first script as the first thing in `<body>`.
   It needs to be loaded first so the page doesn't load in light theme and then switch.

    ```html
    <body>
    <script src="darkmode/theme.js"></script>
    <!-- ... --->
    ```

3. Load the switch whereever you need it:

    ```html
    <script src="darkmode/darkswitch.js"></script>
    ```

## Customization

You can listen to theme changes by registering a callback with `themeChangeHandlers`:

```js
themeChangeHandlers.add(theme => console.log('using theme: ' + theme));
```

To change the way the theme is persisted, you can declare the `loadTheme` and `saveTheme` functions:

```js
function loadTheme() {
    // custom logic
    return "dark";
}

function saveTheme(theme) {
    // custom logic
}
```
