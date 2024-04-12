let choiceList = document.querySelectorAll(" .btn input"); //get the all buttons value of calculator
let display = document.querySelector(".display input"); // Display value

// display.value = "0";

// console.log(choiceList);
// console.log(display.value);


choiceList.forEach((choice) =>{
    
    choice.addEventListener("click",() =>{
        const  userChoice = choice.getAttribute("value"); 

        // console.log(userChoice);
        
        if (userChoice === "AC"){
            display.value =" ";
            
        }else if(userChoice === "DEL"){
            display.value = display.value.toString().slice(0 , -1);   // Deleting last character from the value by making string and useing string method
        }else if(userChoice === "=" ){
            display.value = eval(display.value) ; // it will evalue the content written in  the display and show the result on the screen
        }
        else{
            display.value += userChoice ; // asign  the clicked button value to the display 
            
        }
        
    });
});

