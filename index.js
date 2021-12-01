// dragElement(document.getElementsByClassName("greenApple")[0]);

// function dragElement(element) {
//     let pos1 = 0,
//         pos2 = 0,
//         pos3 = 0,
//         pos4 = 0;

//     element.onmousedown = dragMouseDown;

//     function dragMouseDown(e) {
//         e = e || window.event;
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         debugger;
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         debugger;
//         // set the element's new position:
//         element.style.top = element.offsetTop - pos2 + "px";
//         element.style.left = element.offsetLeft - pos1 + "px";
//     }

//     function closeDragElement() {
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

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
