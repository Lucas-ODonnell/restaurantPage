const home = () => {
	const h1 = document.createElement('h1');
	const divOne = document.createElement('div');
	const divTwo = document.createElement('div');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');
	const display = document.querySelector('[data-class-content]');
	const homeDisplay = document.createElement('div');

	homeDisplay.classList.add('home-display');
	homeDisplay.setAttribute('data-home-display', "");

	h1.classList.add('landing-title');
	h1.innerText = 'LKO Coffee Co-Op'; 

	homeDisplay.append(h1);

	divOne.classList.add('informational-box');
	homeDisplay.append(divOne);

	divTwo.classList.add('blurb');
	divOne.append(divTwo);

	h2.classList.add('blurb-title');
	h2.innerText = 'Great Coffee at a Great Price'; 
	divTwo.append(h2);

	p.classList.add('blurb-text');
	p.innerHTML = 'Here at LKO Coffee Co-Op, we strive to bring you great coffee at a price, that is fair to you, our baristas, and the people who grow the coffee we serve here. From the farm where the beans are grown, to the cappuccino we serve you at our bar, you can rest easy knowing that no humans or animals were exploited in the making of your delicious beverage. <br><br>See you here! &#9773;';

	divTwo.append(p);

	display.append(homeDisplay);

}

export default home;
