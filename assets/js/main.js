// Übung lev2_8: Einkaufsliste
// Schreibe eine Funktion, die beim Anklicken des Buttons neues Listenelement erstellt.
// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze
// querySelector()
// addEventListener()
// createElement()
// createTextNode()
// appendChild()
// createListElement()
// Sorge dafür, dass beim betätigen der ENTER-Taste ebenfalls ein Listenelement erstellt wird.
// Suche nach keycode.


let input = document.getElementById("userinput");
let enter = document.getElementById("enter");
let ul = document.getElementById("ul");


console.log("working 1");//is working

enter.addEventListener("click", () => {
    console.log("working 2"); //is working after click on button
    console.log(input.value); //is working
    let listElement = document.createElement("li");
    ul.appendChild(listElement);
    listElement.textContent = input.value;
});