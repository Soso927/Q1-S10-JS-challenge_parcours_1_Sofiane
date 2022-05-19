/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */

/*var nombre = prompt ("Entrez votre premier nombre");
*/

var a = prompt("Entrez le premier nombre"); 
var b = prompt("Entrez votre deuxième nombre");

var somme = parseInt(a) + parseInt(b);
var resultElement=document.querySelector("#result");
resultElement.textContent=somme;

