
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

     // Loop through 4 times
    for (let i = 0; i < 4; i++){
      
        // Print the number we're at in the loop
        console.log(i);
        
        // Get the i-th letter in the name
        let letter = name[i];
        console.log(letter);
        
        // Create a new HTML image element for the card
        let selectedCard = document.createElement("img");
        
        // If letter is any of these, use the devil card
        if (["a", "b", "c", "d", "e", "f"].includes(letter)){
          selectedCard.src = gerbera.png;
        }
        
        // If letter is any of these, use the magician card
        if (["g", "h", "i", "j", "k", "l"].includes(letter) ){
          selectedCard.src = rose.png;
        }
        
        // If letter is any of these, use the star card
        if (["m", "n", "o", "p", "q", "r"].includes(letter)){
          selectedCard.src = starURL;
        }
        
        // If letter is any of these, use the moon card
        if (["s", "t", "u", "v", "w", "x", "y", "z"].includes(letter)){
          selectedCard.src = moonURL;
        }
        
        result.appendChild(selectedCard);
        
      }
  }
});