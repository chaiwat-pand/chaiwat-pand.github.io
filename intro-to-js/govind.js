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

 function calAge() {
   let age = prompt("What's your birthyear?");
   age = 2022 - age;
   alert(`“ยินดีด้วย นายอยู่ในประเทศนี้มา ${age} ปีแล้ว”`)

}

function loadProfile() {
   const myName = "Govind"
   const myProvince = "Nonthaburi"
   document.getElementById("my-name").innerHTML = myName ;
   document.getElementById("my-province").innerHTML = myProvince;

}