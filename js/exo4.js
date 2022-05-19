/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */
function displayTime(){

let today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);

console.log(time);
console.log(typeof(time));

let clockElement=document.querySelector('#container');
clockElement.textContent=time;
}
setInterval(displayTime,1000);
