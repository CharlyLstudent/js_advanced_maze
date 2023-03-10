
let clone
let newCell = document.createElement("div");
for (let i = 0; i < maze["3"]["ex-0"].length; i++) {
    newCell.innerHTML = "posX: " + maze["3"]["ex-0"][i].posX + "<br>" +"posY: " + maze["3"]["ex-0"][i].posY;
    clone = newCell.cloneNode(true);
    clone.id = "newId" +i;
    document.getElementById("container").appendChild(clone);
}
 document.getElementById("container").lastChild.style.background = 'green';
 document.getElementById("container").firstChild.style.background = 'orange';