const contact = () => {
	const display = document.querySelector('[data-class-content]');
	const contactDisplay = document.createElement('div');
	contactDisplay.classList.add('contact-display');
	contactDisplay.setAttribute('data-display-contact', "");

	const contactTitle = document.createElement('h1');
	contactTitle.classList.add('landing-title');
	contactTitle.innerText = "Contact";

	const espressoImage = document.createElement('img');
	espressoImage.src = '../images/espresso.jpg';

	contactDisplay.append(contactTitle);
	contactDisplay.append(espressoImage);

	const contactInfo = document.createElement('div');
	contactInfo.classList.add('contact-information');
	contactInfo.innerHTML = '<p class="contact-paragraph">We are open 7 days a week, from 6am to 10pm.</p><br><p class="contact-paragraph">Address: 12345 Fake Rd, Fakecity, Fakestate 00000 </p><br><p class="contact-paragraph">Phone Number: (123)456-7899</p> '

	contactDisplay.append(contactInfo);

	display.append(contactDisplay);
};

export default contact;


