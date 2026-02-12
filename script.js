let numbers = document.querySelectorAll(".numberButton")
let operators = document.querySelectorAll(".operator")
let equal = document.getElementById("equal")
let clearButton = document.getElementById("clearButton")
let deButton = document.getElementById("DEButton")
let point = document.getElementById("point")
let input = document.querySelector("input")

input.value = "0"

state = {
    previousNumber :  "",
    currentNumber : "",
    previousOperator : "",
    currentOperator : "",
    lastActionWasEqual : false
}

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
    
        // Update the state
        state.currentNumber = state.currentNumber + numberClicked
        
        console.log(state)
        updateInput()
        
        
        
        // Flag
        if (state.lastActionWasEqual == true) {

            state.currentNumber = numberClicked
            state.lastActionWasEqual = true
            
            console.log(state)
            updateInput()
            

            state.lastActionWasEqual = false
            return
        }

        state.lastActionWasEqual = false
        
    })
}


// When clicking an operator 
for(let i = 0; i < operators.length;++i) {
    operators[i].addEventListener("click",()=> {
        
        // CAS FLAG 
        // Il a uniquement a identifier l'etat du prochain clique
        if (state.lastActionWasEqual == true) {
            
            if (state.previousNumber == "") {
                operatorClicked = operators[i].innerHTML
                state.currentOperator = operatorClicked
                prepareFirstOperation()
                state.currentOperator = ""
                state.lastActionWasEqual = true
                
                console.log(state)
                updateInput()
                
        
            }
            
            state.lastActionWasEqual = false

            return
        }
        
        // CAS NORMAL

        if (state.previousNumber == "") {
            operatorClicked = operators[i].innerHTML
            state.currentOperator = operatorClicked
            prepareFirstOperation()
            state.currentOperator = ""
        
            console.log(state)
            updateInput()
            
        }
        else if (state.previousNumber !== "") {
           operatorClicked = operators[i].innerHTML
            
           state.currentOperator = operatorClicked
            
            state.previousNumber = operate(state.previousOperator,state.previousNumber,state.currentNumber)
            
            state.previousOperator = state.currentOperator 
            state.currentOperator = ""
            state.currentNumber = "" 
        
            console.log(state)
            updateInput() 
            
        }   
    }) 
    
}


// When clicking equal sign
equal.addEventListener("click",()=> {
    
    state.lastActionWasEqual = true
    
    // Je prends currentNumber en tant que resultat pcq après avoir appuyer sur egal je suis dans l'etape une où g currentNumber qui est le résultat obtenu et rien d'autre
    state.currentNumber = operate(state.previousOperator,state.previousNumber,state.currentNumber)
    
    // Vu que je veux continuer avec les operateurs il faut que je reinitialise les valeurs
    state.previousNumber = ""
    state.currentOperator = ""
    state.previousOperator = ""  
    
    console.log(state)
    updateInput()
    
    
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

    state.previousNumber = state.currentNumber 
    state.currentNumber = ""
    state.previousOperator = state.currentOperator
}

// Clear input value and values 
function clear() {
    clearButton.addEventListener("click",()=>{
        state.lastActionWasEqual = false
        input.value = "0"
        state.currentNumber = ""
        state.previousNumber = ""
        state.currentOperator = ""
        state.previousOperator = ""    
    })
}

// nombre décimaux
point.addEventListener("click",() => {
    
    // Seulement un point
    if (!(state.currentNumber.includes("."))) {
        state.currentNumber = state.currentNumber + "." 
        updateInput()
        console.log(state)
        
    }
})

function removeCharacter(str) {
    let newString = str.slice(0, -1);
    return newString;
}

function updateInput() {
    console.log(state.previousNumber)
    console.log(state.currentNumber)
    console.log(state.previousOperator)
    console.log(state.currentOperator)
    console.log(state.lastActionWasEqual)
    
    if (state.currentNumber !== "" && state.previousNumber == "" && state.previousOperator == "" && state.currentOperator == ""  ) {
        return input.value = state.currentNumber
    }
    else if (state.currentNumber == "" && state.previousNumber !== "" && state.previousOperator !== "" && state.currentOperator == ""  ) {
        return input.value = state.previousNumber + state.previousOperator
        
    }
    else if (state.currentNumber !== "" && state.previousNumber !== "" && state.previousOperator !== "" && state.currentOperator == ""  ) {
        return input.value = state.previousNumber + state.previousOperator + state.currentNumber
        
    }
    else if (state.currentNumber == "" && state.previousNumber !== "" && state.previousOperator == "" && state.currentOperator == ""  ) {
        return input.value = state.previousNumber    
    }
}

clear()






