function dragStart(event) {
    localStorage.setItem("idStarted", event.target.id);
    localStorage.setItem(
        "parentElementIdStarted",
        event.target.parentElement.id
    );
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    let figureId = localStorage.getItem("idStarted");
    let selectedFigure = document.getElementById(figureId);

    let objectBeingCreated = document.createElement("div");
    objectBeingCreated.style.marginLeft = "12px";

    event.target.appendChild(objectBeingCreated).appendChild(selectedFigure); // закончили вставку яблока в корзину

    let parentElementIdStarted = localStorage.getItem("parentElementIdStarted");
    let parElem = document.getElementById(parentElementIdStarted);

    if (parentElementIdStarted === "rowApples") {
        parElem.children[0].style.opacity = "0.5"; // пометили перенесённый фрукт
    }
}
