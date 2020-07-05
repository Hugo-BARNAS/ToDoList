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
const options = { weekday: "long", month: "short", day: "2-digit"};
const today = new Date();
let calendar = dataElement.innerHTML = today.toLocaleDateString('fr-FR', options);


console.log("DATE ==> : " + calendar);

