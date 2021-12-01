function dragStart(event) {
    localStorage.setItem("idStarted", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    let figureId = localStorage.getItem("idStarted");
    let selectedFigure = document.getElementById(figureId);

    let objectBeingCreated = document.createElement("div");
    objectBeingCreated.style.marginLeft = "12px";

    event.target.appendChild(objectBeingCreated).appendChild(selectedFigure);
}
