// CODE EXPLAINED channel

// SELECTION DES ELEMENTS

const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// CREATION DES CLASSES

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-fin";
const LINE_THROUGH = "lineThrought";

// DATE DU JOUR
const options = { weekday: "long", month: "short", day: "2-digit" };
const today = new Date();
let calendar = dataElement.innerHTML = today.toLocaleDateString('fr-FR', options);


console.log("DATE ==> : " + calendar);

// AJOUT DES FONCTIONS
// FONCTION POUR INTÉGRER LA LISTE À FAIRE DANS LE UL
let item = `
<li class="item"
<i class="fa fa-circle-thin co" job="complete" id="0"></i>
<p class="text">${toDo}</p>
<i class="fa fa-trash-o de" job="delete" id="0"></i>
</li>
`
let position = "beforend"; //---------------------> création d'une variable en précisant le positionnement de la li juste après la ul
list.innerHTML(position, item); //----------------> intégration de la li 1/ en précisant la position via la variable et en précisant ce qu'il faut mettre dans la li


// FONCTION addToDo

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        const toDo = input.value;
    } if(toDo) { 
     addToDo(toDo);
    }
})
 
