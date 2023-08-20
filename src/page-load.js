const pageLoad = function () {
    const content = document.getElementById('content');
    let img = document.createElement('div');
    img.classList.add("banner");
    let header = document.createElement('h1');
    header.textContent = "The Salty Spitoon";
    let description = document.createElement('p');
    description.textContent = "Lorem ipsum dolor sit amet, tibique efficiendi mel et. In erant disputando ius, eu vero sensibus eos. Usu ea velit definitiones, eos persecuti incorrupte cu, mel brute delenit an. Mutat putent an his. Aliquam imperdiet scriptorem in sit. Ad mei viris inciderint, vix no scaevola dissentias."
    let pageElements = [img, header, description];
    pageElements.forEach(element => {
        content.appendChild(element);
    });
}

export default pageLoad;