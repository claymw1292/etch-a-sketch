function newGridContainer() {
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "gridContainer");
    document.getElementById("container").appendChild(gridContainer);
}

function newBoard(numOfGridItems) {
    for (let k = 0; k < numOfGridItems; k++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        document.getElementById("gridContainer").appendChild(row);
    
    for (let i = 0; i < numOfGridItems; i++) {
        let sqr = document.createElement("div");
        sqr.setAttribute("class", "sqr");
        row.appendChild(sqr);
        sqr.addEventListener("mouseover", function(e) {
            sqr.style.backgroundColor = "orange";
        });
    }
    }
}

newGridContainer();
newBoard(16);


let btn = document.getElementById("resetButton");
btn.addEventListener("click", function () {
    let gridContainer = document.getElementById("gridContainer");
    gridContainer.remove();
    newGridContainer();
    let numOfGridItems = Number(prompt("How many boxes would you like?"));
    newBoard(numOfGridItems);
});

