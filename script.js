let numbers = document.querySelectorAll(".numberButton")
let operators = document.querySelectorAll(".operator")
let equal = document.getElementById("equal")
let clearButton = document.getElementById("clearButton")
let deButton = document.getElementById("DEButton")
let point = document.getElementById("point")
let input = document.querySelector("input")

input.value = "0"
let previousNumber = ""
let currentNumber = ""
let previousOperator = ""
let currentOperator = ""
let lastActionWasEqual = false


function add(a,b) {
    return a + b
}

function substract(a,b) {
    return a - b  
}

function multiply(a,b) {
    return a * b 
}

function divide(a,b) {
    if (b == 0) {
        return "Undefined"
    }
    else {
        return a/b
    }
}

function operate(operator,number1,number2) {
    // Je travaille avec des strings donc je transforme en nombre float puisque g des points
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)

    const operations = {
         "+": add,
        "-": substract,
        "×": multiply,
        "÷": divide
    }
    const operationFunction = operations[operator] // stock la fonction

    const result = operationFunction(number1, number2)

    return Math.round(result * 100) / 100 // arrondie
    
}



// When clicking a number 
for(let i = 0; i < numbers.length;++i) {
    numbers[i].addEventListener("click",()=> {
        
        numberClicked = numbers[i].innerHTML
        
        currentNumber = currentNumber + numberClicked
        displayNumber(currentNumber)
        
        
        // Flag
        if (lastActionWasEqual == true) {
            
            currentNumber = numberClicked
            displayNumber(currentNumber)
            
            lastActionWasEqual = false
            return
        }

        lastActionWasEqual = false
        
    })
}


// When clicking an operator 
for(let i = 0; i < operators.length;++i) {
    operators[i].addEventListener("click",()=> {
        
        // This is the operator clicked
        operatorClicked = operators[i].innerHTML
        
        // This is the current operator
        currentOperator = operatorClicked

        displayNumberAndOperator(currentOperator)
        
        // CAS FLAG 
        // Il a uniquement a identifier l'etat du prochain clique
        if (lastActionWasEqual == true) {
            
            if (previousNumber == "") {
            
                prepareFirstOperation()
            }

            lastActionWasEqual = false
            return
        }
        
        // CAS NORMAL

        if (previousNumber == "") {
            
            prepareFirstOperation()
            
        }
        else if (previousNumber !== "") {

            previousNumber = operate(previousOperator,previousNumber,currentNumber)
            displayNumber(previousNumber)

            previousOperator = currentOperator 
            currentNumber = ""  
        }   
    }) 
}


// When clicking equal sign
equal.addEventListener("click",()=> {
    
    lastActionWasEqual = true
    
    // Je prends currentNumber en tant que resultat pcq après avoir appuyer sur egal je suis dans l'etape une où g currentNumber qui est le résultat obtenu et rien d'autre
    currentNumber = operate(previousOperator,previousNumber,currentNumber)
    displayNumber(currentNumber)
    
    
    // Vu que je veux continuer avec les operateurs il faut que je reinitialise les valeurs
    previousNumber = ""
    currentOperator = ""
    previousOperator = ""   
})


// When clicking delete button
deButton.addEventListener("click", () => {
    removeCharacter(currentNumber)
    lastActionWasEqual == false
    
    
    // CAS FLAG
    if (lastActionWasEqual == true) {
    
        lastActionWasEqual = false
        return
    }
    
    // CAS NORMAL
    // Empecher le cas où 105+ de enlever currentNumber entierement car à ce moment là considéré en tant que empty
    if (currentNumber == "" ) {
        
    }
    else {
        currentNumber = removeCharacter(currentNumber)
        previousOperator = removeCharacter(previousOperator)
        currentOperator = removeCharacter(currentOperator)
        //displayNumber(currentNumber)
    }
})


function prepareFirstOperation() {

    previousNumber = currentNumber 
    currentNumber = ""
    previousOperator = currentOperator
}

// Clear input value and values 
function clear() {
    clearButton.addEventListener("click",()=>{
        lastActionWasEqual = false
        input.value = "0"
        currentNumber = ""
        previousNumber = ""
        currentOperator = ""
        previousOperator = ""
    })
}

// nombre décimaux
point.addEventListener("click",() => {
    
    // Seulement un point
    if (!(currentNumber.includes("."))) {
        currentNumber = currentNumber + "."
        displayNumber(currentNumber)   
    }
})

function removeCharacter(str) {
    let newString = str.slice(0, -1);
    return newString;
}

function displayNumber(number) {
    input.value = number
}

function displayNumberAndOperator(operator) {
    input.value = input.value + operator 
}


clear()

// let previousNumber = ""
// let currentNumber = ""
// let previousOperator
// let currentOperator

// let lastActionWasEqual = false

// // Identify the current number
// for(let i = 0; i < numbers.length;++i) {
//     numbers[i].buttonNumber.addEventListener("click",()=> {
        
    
//         numberClicked = numbers[i].value
        
//         currentNumber = currentNumber + numberClicked
//         displayNumber(currentNumber)
        

//         // Flag
//         if (lastActionWasEqual == true) {
            
//             console.log("State : IN THE FLAG OF NUMBER")
//             console.log(`before previous number ${previousNumber}`)
//             console.log(`before current number ${currentNumber}`)
//             console.log(`before previous operator ${previousOperator}`)
//             console.log(`before current operator ${currentOperator}`)
//             currentNumber = numberClicked
//             displayNumber(currentNumber)
//             console.log(`after previous number ${previousNumber}`)
//             console.log(`after current number ${currentNumber}`)
//             console.log(`after previous operator ${previousOperator}`)
//             console.log(`after current operator ${currentOperator}`)
//             lastActionWasEqual = false
//             return
//         }

//         lastActionWasEqual = false
        
//         console.log("")
//         console.log("State : AFTER NUMBER CLICK")
//         console.log(`Equal sign clicked : ${lastActionWasEqual}`)
        
        
//         console.log(`previous number ${previousNumber}`)
//         console.log(`current number ${currentNumber}`)
//         console.log(`previous operator ${previousOperator}`)
//         console.log(`current operator ${currentOperator}`)
        
//     })
// }

// deButton.addEventListener("click", () => {
//     lastActionWasEqual == false
//     console.log("")
//     console.log("State : AFTER DELETE CLICK")
//     console.log(`Equal sign clicked : ${lastActionWasEqual}`)
//     console.log(`previous number ${previousNumber}`)
//     console.log(`current number ${currentNumber}`)
//     console.log(`previous operator ${previousOperator}`)
//     console.log(`current operator ${currentOperator}`)
    
//     if (lastActionWasEqual == true) {
//         console.log("No effect")
//         lastActionWasEqual = false
//         return
//     }
    
//     // Empecher le cas où 105+ de enlever currentNumber entierement car à ce moment là considéré en tant que empty
//     if (currentNumber == "" ) {
        
//     }
//     else {
//         currentNumber = removeCharacter(currentNumber)
//         previousOperator = removeCharacter(previousOperator)
//         currentOperator = removeCharacter(currentOperator)
//         displayNumber(currentNumber)
//         console.log(`current number ${currentNumber}`)
//         console.log(`previous operator ${previousOperator}`)
//         console.log(`current operator ${currentOperator}`)
//     }
// })

// for(let i = 0; i < operators.length;++i) {
//     operators[i].buttonOperator.addEventListener("click",()=> {
        
//         // This is the operator clicked
//         operatorClicked = operators[i].value
        
//         // This is the current operator
//         currentOperator = operatorClicked

//         displayNumberAndOperator(currentOperator)
        


//         // Flag
//         if (lastActionWasEqual == true) {
//             console.log("")
//             console.log("State : IN THE FLAG OF OPERATOR")
//             console.log(`previous number ${previousNumber}`)
//             console.log(`current number ${currentNumber}`)
//             console.log(`previous operator ${previousOperator}`)
//             console.log(`current operator ${currentOperator}`)

//             // Je garde la meme logique egalement à l'interieur du flag
            
//             if (previousNumber == "") {
            
//                 console.log("State : NO OPERATION")

//                 console.log(`before previous number ${previousNumber}`)
//                 console.log(`before current number ${currentNumber}`)
//                 console.log(`before previous operator ${previousOperator}`)
//                 console.log(`before current operator ${currentOperator}`)
                
//                 previousNumber = currentNumber 
//                 currentNumber = ""
//                 previousOperator = currentOperator
                
//                 console.log("State : AFTER CONDITION ")

//                 console.log(`previous number ${previousNumber}`)
//                 console.log(`current number ${currentNumber}`)
//                 console.log(`previous operator ${previousOperator}`)
//                 console.log(`current operator ${currentOperator}`)

//             }
//             lastActionWasEqual = false
//             return
//         }
         
        
        
//         console.log("")
//         console.log(`Equal sign clicked : ${lastActionWasEqual}`)
       
//         console.log("State : AFTER OPERATOR CLICK")

//         if (previousNumber == "") {
            
//             console.log("If previous number empty")
//             console.log("NO OPERATION")

//             console.log(`before previous number ${previousNumber}`)
//             console.log(`before current number ${currentNumber}`)
//             console.log(`before previous operator ${previousOperator}`)
//             console.log(`before current operator ${currentOperator}`)
            
//             previousNumber = currentNumber 
//             currentNumber = ""
//             previousOperator = currentOperator
            
//             console.log("State : AFTER CONDITION ")

//             console.log(`previous number ${previousNumber}`)
//             console.log(`current number ${currentNumber}`)
//             console.log(`previous operator ${previousOperator}`)
//             console.log(`current operator ${currentOperator}`)
//         }
//         else if (previousNumber !== "") {
//             console.log("If previous number is not empty")
//             console.log("MAKE OPERATION")

//             previousNumber = operate(previousOperator,previousNumber,currentNumber)
//             displayNumber(previousNumber)
//             console.log("Operation made")

//             previousOperator = currentOperator 
//             currentNumber = ""

//             console.log(`previous number ${previousNumber}`)
//             console.log(`current number ${currentNumber}`)
//             console.log(`previous operator ${previousOperator}`)
//             console.log(`current operator ${currentOperator}`)
            
//         } 
        
//     }) 
// }

// // Gives the result when clicking equal
// equal.addEventListener("click",()=> {
    
//     lastActionWasEqual = true
    
//     // Je prends currentNumber en tant que resultat pcq après avoir appuyer sur egal je suis dans l'etape une où g currentNumber qui est le résultat obtenu et rien d'autre
//     currentNumber = operate(previousOperator,previousNumber,currentNumber)
//     displayNumber(currentNumber)
    
//     // Vu que je veux continuer avec les operateurs il faut que je reinitialise les valeurs
//     previousNumber = ""
//     currentOperator = ""
//     previousOperator = "" 
    
//     console.log("")
//     console.log(`Equal sign clicked : ${lastActionWasEqual}`)
//     console.log("State : AFTER EQUAL SIGN CLICK")
//     console.log(`previous number ${previousNumber}`)
//     console.log(`current number ${currentNumber}`)
//     console.log(`previous operator ${previousOperator}`)
//     console.log(`current operator ${currentOperator}`)
    
    
// })


// // Clear input value and values 
// function clear() {
//     clearButton.addEventListener("click",()=>{
//         lastActionWasEqual = false
//         input.value = "0"
//         currentNumber = ""
//         previousNumber = ""
//         currentOperator = ""
//         previousOperator = ""

//         console.log("")
//         console.log(`Equal sign clicked : ${lastActionWasEqual}`)
//         console.log("State : AFTER CLEAR CLICK")
//         console.log(`previous number ${previousNumber}`)
//         console.log(`current number ${currentNumber}`)
//         console.log(`previous operator ${previousOperator}`)
//         console.log(`current operator ${currentOperator}`)
//     })
// }

// // nombre décimaux
// point.addEventListener("click",() => {
//     console.log(`This is the current number in point ${currentNumber}`)
//     // Seulement un point
//     if (!(currentNumber.includes("."))) {
//         currentNumber = currentNumber + "."
//         console.log(`This is the current number ${currentNumber}`)
//         displayNumber(currentNumber)
        
//     }

// })

// deButton.addEventListener("click", () => {
//     removeCharacter(currentNumber)
// })

// function removeCharacter(str) {
//     let newString = str.slice(0, -1);
//     return newString;
// }

// function displayNumber(number) {
//     input.value = number
// }

// function displayNumberAndOperator(operator) {
//     input.value = input.value + operator 
// }


// clear()




