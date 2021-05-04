let roseURL = "rose-01.png";
let gerberaURL = "30.png";
let sunURL = "40.png";
let tulipURL = "50.png";
let sevenURL = "70.png";
let nineURL = "90.png";
let hunURL = "100.png";


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
    for (let i = 0; i < 7; i++){
      
        // Print the number we're at in the loop
        console.log(i);
        
        // Get the i-th letter in the name
        let letter = name[i];
        console.log(letter);
        
        // Create a new HTML image element for the card
        let selectedCard = document.createElement("img");
        
        // If letter is any of these, use the devil card
        if (["a", "c"].includes(letter)){
          selectedCard.src = roseURL;
        }
        
        // If letter is any of these, use the magician card
        if (["b", "d"].includes(letter) ){
          selectedCard.src = gerberaURL;
        }
        
        // If letter is any of these, use the star card
        if (["e", "j", "g"].includes(letter)){
          selectedCard.src = sunURL;
        }
        
        // If letter is any of these, use the moon card
        if (["h", "l", "f", "k", "q"].includes(letter)){
          selectedCard.src = tulipURL;
        }
        
        if (["m", "s", "o", "p", "i"].includes(letter)){
          selectedCard.src = sevenURL;
        }

        if (["r", "n", "t", "u"].includes(letter)){
          selectedCard.src = nineURL;
        }

        if (["v", "w", "x", "y", "z"].includes(letter)){
          selectedCard.src = hunURL;
        }
        result.appendChild(selectedCard);
        
      }
  }
})