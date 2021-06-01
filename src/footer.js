const footer = () => {
	const foot = document.createElement('footer');
	foot.classList.add('footer');

	const paragraph = document.createElement('p');
	paragraph.innerHTML = `Created by <a href="https://github.com/Lucas-ODonnell">Lucas O'Donnell</a> &copy`;

	foot.append(paragraph);

	const body = document.getElementsByTagName('body')[0];

	body.append(foot);
}

export default footer;
