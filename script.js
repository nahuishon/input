let roseURL = "10.png";
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
     for (let i = 0; i < 1; i++){
      
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
          if (event.key == "Enter"){
            document.body.classList.toggle("red");
          }
        }
        
        // If letter is any of these, use the magician card
        if (["b", "d"].includes(letter) ){
          selectedCard.src = gerberaURL;
          if (event.key == "Enter"){
            document.body.classList.toggle("green");
          }
        }
        
        // If letter is any of these, use the star card
        if (["e", "j", "g"].includes(letter)){
          selectedCard.src = sunURL;
          if (event.key == "Enter"){
            document.body.classList.toggle("green");
          }
        }
        
        // If letter is any of these, use the moon card
        if (["h", "l", "f", "k", "q"].includes(letter)){
          selectedCard.src = tulipURL;
          if (event.key == "Enter"){
            document.body.classList.toggle("green");
          }
        }
        
        if (["m", "s", "p"].includes(letter)){
          selectedCard.src = sevenURL;
          if (event.key == "Enter"){
            document.body.classList.toggle("green");
          }
        }

        if (["r", "n", "t", "u","v", "w", "x"].includes(letter)){
          selectedCard.src = nineURL;
        }

        if (["y", "z","o"].includes(letter)){
          selectedCard.src = hunURL;
          if (event.key == "Enter"){
    document.body.classList.toggle("blue");
  }
   }
       
        result.appendChild(selectedCard);
        
      }
  }
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
