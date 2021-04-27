
let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

inputElement.addEventListener("keydown", 
function(event){
  if (event.key == "Enter"){
      //let's show the text on the page!
      console.log(inputElement.value);
      result.innerText = "You typed: " +
 inputElement.value;

     inputElement.value = "";
  }
});