/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */

document.querySelector("form").addEventListener("submit",sum);

function sum(e){
    e.preventDefault();
}



let formElement=document.querySelector('form');
formElement.addEventListener
