function askMyName() {
    const name = prompt("What's your name?");
    if (name != null) {
       document.getElementById("name-input").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
    const h1message = document.getElementById("name-input").innerHTML
    alert(h1message + " King of all Pirates")
 }