function dragStart(event) {
    localStorage.setItem("idStarted", event.target.id);
    localStorage.setItem(
        "parentElementIdStarted",
        event.target.parentElement.id
    );
    localStorage.setItem("positionApple", event.target.dataset.position);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    let positionApple = localStorage.getItem("positionApple");
    let figureId = localStorage.getItem("idStarted");
    let selectedFigure = document.getElementById(figureId);

    let objectBeingCreated = document.createElement("div");
    objectBeingCreated.style.marginLeft = "12px";

    event.target.appendChild(objectBeingCreated).appendChild(selectedFigure); // закончили вставку яблока в корзину

    // создаём копию и ставим на место оригинала

    let copyBeingCreated = document.createElement("img");
    copyBeingCreated.src = "./pictures/greenApple.svg";
    copyBeingCreated.id = figureId;
    copyBeingCreated.setAttribute("data-position", positionApple);
    copyBeingCreated.style.opacity = "0.5";

    let newPlaceSelectedApple =
        document.getElementsByClassName("appleInRow")[positionApple];
    newPlaceSelectedApple.appendChild(copyBeingCreated);

    // let parentElementIdStarted = localStorage.getItem("parentElementIdStarted");
    // let parElem = document.getElementById(parentElementIdStarted);

    // if (parentElementIdStarted === "rowApples") {
    // }
}
