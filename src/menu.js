const menu = () => {
	const display = document.querySelector('[data-class-content]');
	const displayMenu = document.createElement('div');
	const menuTitle = document.createElement('h1');
	const menuWrap = document.createElement('div');

	displayMenu.classList.add('display-menu');
	displayMenu.setAttribute('data-display-menu', "");
	menuTitle.classList.add('landing-title');
	menuWrap.classList.add('menu');

	displayMenu.append(menuTitle);
	menuTitle.innerText = "Menu";

	displayMenu.append(menuWrap);

	display.append(displayMenu);

	menuWrap.innerHTML = `<table>
						<tr>
							<td>Espresso(Single)</td>
							<td>$1</td>
						</tr>
						<tr>
							<td>Espresso(Double)</td>
							<td>$2</td>
						</tr>
						<tr>
							<td>Americano</td>
							<td>$2.50</td>
						</tr>
						<tr>
							<td>Cappuccino</td>
							<td>$4.25</td>
						</tr>
						<tr>
							<td>Cafe Latte</td>
							<td>$5</td>
						</tr>
						<tr>
							<td>Flat White</td>
							<td>$4</td>
						</tr>
						<tr>
							<td>Cortado</td>
							<td>$2.50</td>
						</tr>
						<tr>
							<td>Macchiato</td>
							<td>$1.50</td>
						</tr>
						<tr class="coffee-menu"></tr>
						<tr>
							<td>Batch Brew</td>
							<td>$1.50</td>
						</tr>
						<tr>
							<td>V60</td>
							<td>$5</td>
						</tr>
						<tr>
							<td>Chemex</td>
							<td>$7</td>
						</tr>
						<tr>
							<td>French Press</td>
							<td>$3</td>
						</tr>
						<tr>
							<td>Aeropress</td>
							<td>$3.50</td>
						</tr>
						<tr>
							<td>Siphon</td>
							<td>$8</td>
						</tr>
						<tr>
							<td>Cold Brew</td>
							<td>$5</td>
						</tr>
						<tr>
							<td>Japanese Iced</td>
							<td>$5</td>
						</tr>
					</table>`
};

export default menu;
