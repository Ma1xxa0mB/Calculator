let n0 = document.getElementById("0")
let n1 = document.getElementById("1")
let n2 = document.getElementById("2")
let n3 = document.getElementById("3")
let n4 = document.getElementById("4")
let n5 = document.getElementById("5")
let n6 = document.getElementById("6")
let n7 = document.getElementById("7")
let n8 = document.getElementById("8")
let n9 = document.getElementById("9")

let equal = document.getElementById("equal")

let addition = document.getElementById("addition")
let subtraction = document.getElementById("subtraction")
let multiplication = document.getElementById("multiplication")
let division = document.getElementById("division")

let clearButton = document.getElementById("clearButton")
let deButton = document.getElementById("DEButton")

let point = document.getElementById("point")

let input = document.querySelector("input")
input.value = "0"

let operators = [
    {
        "buttonOperator":addition,
        "value":"+"
    },
    {
        "buttonOperator":subtraction,
        "value":"-"
    },
    {
        "buttonOperator":multiplication,
        "value":"x"
    },
    {
        "buttonOperator":division,
        "value":"/"
    },
]

let numbers = [
    {
        "buttonNumber": n0,
        "value":"0"
    },
    {
        "buttonNumber": n1,
        "value":"1"
    },
    {
        "buttonNumber": n2,
        "value":"2"
    },
    {
        "buttonNumber": n3,
        "value":"3"
    },
    {
        "buttonNumber": n4,
        "value":"4"
    },
    {
        "buttonNumber": n5,
        "value":"5"
    },
    {
        "buttonNumber": n6,
        "value":"6"
    },
    {
        "buttonNumber": n7,
        "value":"7"
    },
    {
        "buttonNumber": n8,
        "value":"8"
    },
    {
        "buttonNumber": n9,
        "value":"9"
    },

]

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
    
    if(operator === "+") {
        result = add(number1,number2)
        return Math.round(result * 100) / 100
    }
    else if (operator === "-") {
        result = substract(number1,number2)
        return Math.round(result * 100) / 100
    }
    else if (operator === "x") {
        result = multiply(number1,number2)
        return Math.round(result * 100) / 100
    }
    else if (operator === "/") {
        result = divide(number1,number2)
        return Math.round(result * 100) / 100
    }
    
}

let previousNumber = ""
let currentNumber = ""
let previousOperator
let currentOperator

let lastActionWasEqual = false

// Identify the current number
for(let i = 0; i < numbers.length;++i) {
    numbers[i].buttonNumber.addEventListener("click",()=> {
        
        numberClicked = numbers[i].value
        
        currentNumber = currentNumber + numberClicked
        displayNumber(currentNumber)
        

        // Flag
        if (lastActionWasEqual == true) {
            console.log("")
            console.log("State : IN THE FLAG OF NUMBER")
            console.log(`before previous number ${previousNumber}`)
            console.log(`before current number ${currentNumber}`)
            console.log(`before previous operator ${previousOperator}`)
            console.log(`before current operator ${currentOperator}`)
            currentNumber = numberClicked
            displayNumber(currentNumber)
            console.log(`after previous number ${previousNumber}`)
            console.log(`after current number ${currentNumber}`)
            console.log(`after previous operator ${previousOperator}`)
            console.log(`after current operator ${currentOperator}`)
            lastActionWasEqual == false
            return
        }

        
        console.log("")
        console.log("State : AFTER NUMBER CLICK")
        console.log(`Equal sign clicked : ${lastActionWasEqual}`)
        
        
        console.log(`previous number ${previousNumber}`)
        console.log(`current number ${currentNumber}`)
        console.log(`previous operator ${previousOperator}`)
        console.log(`current operator ${currentOperator}`)
        
    })
}

// deButton.addEventListener("click", () => {
//     console.log("We click the delete button")
//     console.log(`previous number ${previousNumber}`)
//     console.log(`current number ${currentNumber}`)
//     console.log(`previous operator ${previousOperator}`)
//     console.log(`current operator ${currentOperator}`)
    
    
//     // Empecher le cas où 105+ de enlever currentNumber entierement car à ce moment là considéré en tant que empty
//     if (currentNumber == "") {

//     }
//     else {
//         currentNumber = removeCharacter(currentNumber)
//         displayNumber(currentNumber)
//         console.log(`current number ${currentNumber}`)
//     }
// })

for(let i = 0; i < operators.length;++i) {
    operators[i].buttonOperator.addEventListener("click",()=> {
        
        // This is the operator clicked
        operatorClicked = operators[i].value
        
        // This is the current operator
        currentOperator = operatorClicked

        displayNumberAndOperator(currentOperator)
        


        // Flag
        if (lastActionWasEqual == true) {
            console.log("")
            console.log("State : IN THE FLAG OF OPERATOR")
            console.log(`previous number ${previousNumber}`)
            console.log(`current number ${currentNumber}`)
            console.log(`previous operator ${previousOperator}`)
            console.log(`current operator ${currentOperator}`)

            // Je garde la meme logique egalement à l'interieur du flag
            
            if (previousNumber == "") {
            
                console.log("State : NO OPERATION")

                console.log(`before previous number ${previousNumber}`)
                console.log(`before current number ${currentNumber}`)
                console.log(`before previous operator ${previousOperator}`)
                console.log(`before current operator ${currentOperator}`)
                
                previousNumber = currentNumber 
                currentNumber = ""
                previousOperator = currentOperator
                
                console.log("State : AFTER CONDITION ")

                console.log(`previous number ${previousNumber}`)
                console.log(`current number ${currentNumber}`)
                console.log(`previous operator ${previousOperator}`)
                console.log(`current operator ${currentOperator}`)

            }
            lastActionWasEqual == false
            return
        }
         
        
        
        console.log("")
        console.log(`Equal sign clicked : ${lastActionWasEqual}`)
       
        console.log("State : AFTER OPERATOR CLICK")

        if (previousNumber == "") {
            
            console.log("If previous number empty")
            console.log("NO OPERATION")

            console.log(`before previous number ${previousNumber}`)
            console.log(`before current number ${currentNumber}`)
            console.log(`before previous operator ${previousOperator}`)
            console.log(`before current operator ${currentOperator}`)
            
            previousNumber = currentNumber 
            currentNumber = ""
            previousOperator = currentOperator
            
            console.log("State : AFTER CONDITION ")

            console.log(`previous number ${previousNumber}`)
            console.log(`current number ${currentNumber}`)
            console.log(`previous operator ${previousOperator}`)
            console.log(`current operator ${currentOperator}`)
        }
        else if (previousNumber !== "") {
            console.log("If previous number is not empty")
            console.log("MAKE OPERATION")

            previousNumber = operate(previousOperator,previousNumber,currentNumber)
            displayNumber(previousNumber)
            console.log("Operation made")

            previousOperator = currentOperator 
            currentNumber = ""

            console.log(`previous number ${previousNumber}`)
            console.log(`current number ${currentNumber}`)
            console.log(`previous operator ${previousOperator}`)
            console.log(`current operator ${currentOperator}`)
            
        } 
        
    }) 
}

// Gives the result when clicking equal
equal.addEventListener("click",()=> {
    
    lastActionWasEqual = true
    
    // Je prends currentNumber en tant que resultat pcq après avoir appuyer sur egal je suis dans l'etape une où g currentNumber qui est le résultat obtenu et rien d'autre
    currentNumber = operate(previousOperator,previousNumber,currentNumber)
    displayNumber(currentNumber)
    
    // Vu que je veux continuer avec les operateurs il faut que je reinitialise les valeurs
    previousNumber = ""
    currentOperator = ""
    previousOperator = "" 
    
    console.log("")
    console.log(`Equal sign clicked : ${lastActionWasEqual}`)
    console.log("State : AFTER EQUAL SIGN CLICK")
    console.log(`previous number ${previousNumber}`)
    console.log(`current number ${currentNumber}`)
    console.log(`previous operator ${previousOperator}`)
    console.log(`current operator ${currentOperator}`)
    
    
})


// Clear input value and values 
function clear() {
    clearButton.addEventListener("click",()=>{
        lastActionWasEqual = false
        input.value = "0"
        currentNumber = ""
        previousNumber = ""
        currentOperator = ""
        previousOperator = ""

        console.log("")
        console.log(`Equal sign clicked : ${lastActionWasEqual}`)
        console.log("State : AFTER CLEAR CLICK")
        console.log(`previous number ${previousNumber}`)
        console.log(`current number ${currentNumber}`)
        console.log(`previous operator ${previousOperator}`)
        console.log(`current operator ${currentOperator}`)
    })
}

// nombre décimaux
point.addEventListener("click",() => {
    console.log(`This is the current number in point ${currentNumber}`)
    // Seulement un point
    if (!(currentNumber.includes("."))) {
        currentNumber = currentNumber + "."
        console.log(`This is the current number ${currentNumber}`)
        displayNumber(currentNumber)
        
    }

})

// deButton.addEventListener("click", () => {
//     removeCharacter(currentNumber)
// })

// function removeCharacter(str) {
//     let newString = str.slice(0, -1);
//     return newString;
// }

function displayNumber(number) {
    input.value = number
}

function displayNumberAndOperator(operator) {
    input.value = input.value + operator 
}


clear()




