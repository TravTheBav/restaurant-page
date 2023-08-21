const loadHome = function () {
    const mainContent = document.querySelector('main');

    let header = document.createElement('h1');
    header.textContent = "Home";

    mainContent.appendChild(header);
}

export default loadHome