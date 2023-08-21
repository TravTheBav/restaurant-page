const loadMenu = function () {
    const mainContent = document.querySelector('main');

    let header = document.createElement('h1');
    header.textContent = "Menu";

    mainContent.appendChild(header);
}

export default loadMenu