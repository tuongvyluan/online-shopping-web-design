function showItemWhenHover(div) {
    imageList = div.querySelectorAll(".showItem");
    imageList[0].classList.remove("active");
    imageList[1].classList.add("active");
}

function showItemAgain(div) {
    imageList = div.querySelectorAll(".showItem");
    imageList[1].classList.remove("active");
    imageList[0].classList.add("active");
}