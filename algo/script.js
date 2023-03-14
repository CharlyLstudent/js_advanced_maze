let clone;
const contain = document.getElementById("container")
const cell = document.createElement("div");
const selectMaze = maze["3"]["ex-0"];
const labyrinthEntrance = selectMaze[0];

function labyrinth() {
    createCells();
    colorStartAndFinish();
    depthFirstSearch(selectMaze, labyrinthEntrance);
}

function createCells() {
    for (let i = 0; i < selectMaze.length; i++) {
        clone = cell.cloneNode(true);
        clone.id = "newId" + i;
        contain.appendChild(clone);
        wallsOrNot(selectMaze[i]);

    }
}

function colorStartAndFinish() {
    contain.children[0].style.backgroundImage = "url('/assets/porte-entree-fondvide.png')";
    contain.children[contain.children.length - 1].style.backgroundImage = "url('/assets/porte-sortie.png')";
}

function wallsOrNot(cell) {

    const clonedCell = document.getElementById(clone.id);
    // console.log(clone.id);
    // console.log(cell.walls[2]);


    if (cell.walls[0]) {
        clonedCell.style.borderTop = "solid black 5px";
    }
    if (cell.walls[1]) {
        clonedCell.style.borderRight = "solid black 5px";
    }
    if (cell.walls[2]) {
        clonedCell.style.borderBottom = "solid black 5px";
    }
    if (cell.walls[3]) {
        clonedCell.style.borderLeft = "solid black 5px";
    }

}

function depthFirstSearch(G, e) {
    let stack = [];
    stack.push(e);
    while (stack.length !== 0) {
        let v = stack.pop();
        v.isVisited = true;
        if (v.exit) {
            return stack;
        }
        const moveTop = G.find(node => node.posX === v.posX && node.posY === v.posY - 1);
        const moveRight = G.find(node => node.posX === v.posX + 1 && node.posY === v.posY);
        const moveDown = G.find(node => node.posX === v.posX && node.posY === v.posY + 1);
        const moveLeft = G.find(node => node.posX === v.posX - 1 && node.posY === v.posY)

        if (!v.walls[0] && !moveTop.isVisited && moveTop) {
            stack.push(moveTop);
        }
        if (!v.walls[1] && !moveRight.isVisited && moveRight) {
            stack.push(moveRight);
        }
        if (!v.walls[2] && !moveDown.isVisited && moveDown) {
            stack.push(moveDown);
        }
        if (!v.walls[3] && !moveLeft.isVisited && moveLeft) {
            stack.push(moveLeft);
        }
    }
    return undefined;
}

labyrinth();