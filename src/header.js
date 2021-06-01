const header = () => {
	const nav = document.createElement('nav');
	nav.classList.add('navbar');

	const ul = document.createElement('ul');
	ul.classList.add('navbar-nav');

	ul.innerHTML = `<li data-nav-item="#home" id="home" class="active"><button class="nav-item" >Home</button></li>
				<li data-nav-item="#menu" id="menu" ><button class="nav-item" >Menu</button></li>
				<li data-nav-item="#contact" id="contact" ><button class="nav-item" >Contact</button></li>`;

	nav.append(ul);

	const body = document.getElementsByTagName('body')[0];
	body.prepend(nav);




}

export default header;
