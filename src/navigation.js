const navigation = () => {
	const homePage = document.querySelector('[data-home-display]');
	const menuPage = document.querySelector('[data-display-menu]');
	const contactPage = document.querySelector('[data-display-contact]');

	let currentPage = homePage;
	currentPage.classList.add('current-menu');

	const navigations = document.querySelectorAll('[data-nav-item]');

	navigations.forEach(navigation => {
		navigation.addEventListener('click', () => {
			const button = document.querySelector(navigation.dataset.navItem);
			switchPage(button);
		});
	});

	function switchPage(button) {
		currentPage.classList.remove('current-menu');
		if (button.id === "home") {
			homePage.classList.add('current-menu');
			currentPage = homePage;
		} else if (button.id === "menu") {
			menuPage.classList.add('current-menu');
			currentPage = menuPage;
		} else if (button.id === "contact") {
			contactPage.classList.add('current-menu');
			currentPage = contactPage;
		}
	}

};

export default navigation;
