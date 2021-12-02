function dragStart(event) {
    localStorage.setItem("idStarted", event.target.id);

    if (event.target.parentElement.id === "appleInBasket") {
        localStorage.setItem(
            "parentElementIdStarted",
            event.target.parentElement.id + event.target.dataset.position
        );
    } else {
        localStorage.setItem(
            "parentElementIdStarted",
            event.target.parentElement.id
        );
    }

    localStorage.setItem("positionApple", event.target.dataset.position);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop() {
    // забираем данные из хранилища

    let parentElementIdStarted = localStorage.getItem("parentElementIdStarted");
    let positionApple = localStorage.getItem("positionApple");
    let figureId = localStorage.getItem("idStarted");

    // начинаем ложить яблоко в корзину
    if (parentElementIdStarted !== "appleInBasket" + positionApple) {
        let selectedFigure = document.getElementById(figureId); // получаем картинку для вставки

        let objectBeingCreated = document.createElement("div");
        objectBeingCreated.style.marginLeft = "12px";
        objectBeingCreated.id = "appleInBasket" + positionApple;

        document
            .getElementsByClassName("fruitBase")[0]
            .appendChild(objectBeingCreated)
            .appendChild(selectedFigure);

        // создаём копию и ставим на место оригинала

        let copyBeingCreated = document.createElement("img");
        copyBeingCreated.src = "./pictures/greenApple.svg";
        copyBeingCreated.id = figureId;
        copyBeingCreated.setAttribute("data-position", positionApple);
        copyBeingCreated.style.opacity = "0.5";

        let newPlaceSelectedApple =
            document.getElementsByClassName("appleInRow")[positionApple];
        newPlaceSelectedApple.appendChild(copyBeingCreated);
    }

    // теперь стоит сделать возможность возврата на место

    if (parentElementIdStarted === "appleInBasket" + positionApple) {
        // убираем яблоко из корзины
        document.getElementById(parentElementIdStarted).remove();

        // возвращаем прозрачность положенному яблоку
        let returnedApple =
            document.getElementsByClassName("appleInRow")[positionApple];
        returnedApple.children[0].style.opacity = "1";
    }
}
