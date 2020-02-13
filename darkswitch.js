function writeDarkSwitch(config) {
	document.write(`
	<div class="custom-control custom-switch">
	<input type="checkbox" class="custom-control-input" id="darkSwitch">
	<label class="custom-control-label" for="darkSwitch">Dark Mode</label>
	</div>
	`);

	const darkSwitch = document.getElementById('darkSwitch');

	darkSwitch.checked = themeConfig.getTheme() === 'dark';
	darkSwitch.onchange = () => {
		config.setTheme(darkSwitch.checked ? 'dark' : 'light');
	};

	config.themeChangeHandlers.push(theme => darkSwitch.checked = theme === 'dark');

	return darkSwitch;
}
