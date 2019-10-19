document.write(`
<div class="custom-control custom-switch">
<input type="checkbox" class="custom-control-input" id="darkSwitch">
<label class="custom-control-label" for="darkSwitch">Dark Mode</label>
</div>
`);

const darkSwitch = document.getElementById('darkSwitch');

darkSwitch.checked = getTheme() === 'dark';
darkSwitch.onchange = () => {
	setTheme(darkSwitch.checked ? 'dark' : 'light');
};

themeChangeHandlers.push(theme => darkSwitch.checked = theme === 'dark');
