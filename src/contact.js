const loadContact = function () {
    const mainContent = document.querySelector('main');

    let header = document.createElement('h1');
    header.textContent = "Contact";

    mainContent.appendChild(header);
}

export default loadContact