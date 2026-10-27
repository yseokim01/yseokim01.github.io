/* Shared theme, keyboard, and form behavior. */
(function () {
	'use strict';

	var root = document.documentElement;
	var browserColorTheme = window.matchMedia('(prefers-color-scheme: dark)');
	var theme = 'light';
	try {
		theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
	} catch (error) {
		// The theme still works when browser storage is unavailable.
	}

	function applyPageIcon() {
		document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach(function (icon) {
			var href = browserColorTheme.matches ? icon.dataset.darkHref : icon.dataset.lightHref;
			if (href) icon.setAttribute('href', href);
		});
	}

	function applyTheme() {
		root.setAttribute('data-theme', theme);
		document.querySelectorAll('img.site-logo').forEach(function (logo) {
			var src = theme === 'dark' ? logo.dataset.darkSrc : logo.dataset.lightSrc;
			if (src) logo.setAttribute('src', src);
		});
		document.querySelectorAll('.theme-toggle').forEach(function (toggle) {
			toggle.setAttribute('aria-pressed', String(theme === 'dark'));
		});
	}

	applyTheme();
	applyPageIcon();
	browserColorTheme.addEventListener('change', applyPageIcon);
	document.querySelectorAll('.theme-toggle').forEach(function (toggle) {
		toggle.addEventListener('click', function (event) {
			event.preventDefault();
			theme = theme === 'light' ? 'dark' : 'light';
			applyTheme();
			try {
				localStorage.setItem('theme', theme);
			} catch (error) {
				// Keep the selected theme for this page.
			}
		});
	});

	document.querySelectorAll('a[role="button"]').forEach(function (button) {
		button.addEventListener('keydown', function (event) {
			if (event.key === ' ') {
				event.preventDefault();
				button.click();
			}
		});
	});

	document.querySelectorAll('form').forEach(function (form) {
		form.addEventListener('submit', function (event) {
			event.preventDefault();
		});
	});

	window.addEventListener('load', function () {
		document.body.classList.remove('is-preload');
	});
})();
