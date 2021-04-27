let roseURL = "http://127.0.0.1:5500/rose/rose.html";
let gerberaURL = "http://127.0.0.1:5500/gerbera/gerbera.html";
let sunURL = "http://127.0.0.1:5500/gerbera/gerbera.html";
let tulipURL = "http://127.0.0.1:5500/gerbera/gerbera.html";
let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

inputElement.addEventListener("keydown", function(event){
  if (event.key == "Enter"){

    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";
    
    //Clear the reading result from last time
    result.innerHTML = "";

     // Loop through 4 times
    for (let i = 0; i < 4; i++){
      
        // Print the number we're at in the loop
        console.log(i);
        
        // Get the i-th letter in the name
        let letter = name[i];
        console.log(letter);
        
        // Create a new HTML image element for the card
        let selectedCard = document.createElement("li");
        
        // If letter is any of these, use the devil card
        if (["a", "b", "c", "d", "e", "f"].includes(letter)){
          selectedCard.src = roseURL;
        }
        
        // If letter is any of these, use the magician card
        if (["g", "h", "i", "j", "k", "l"].includes(letter) ){
          selectedCard.src = gerberaURL;
        }
        
        // If letter is any of these, use the star card
        if (["m", "n", "o", "p", "q", "r"].includes(letter)){
          selectedCard.src = sunURL;
        }
        
        // If letter is any of these, use the moon card
        if (["s", "t", "u", "v", "w", "x", "y", "z"].includes(letter)){
          selectedCard.src = tulipURL;
        }
        
        result.appendChild(selectedCard);
        
      }
  }
})