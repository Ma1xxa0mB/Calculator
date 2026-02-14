let numbers = document.querySelectorAll(".numberButton")
let operators = document.querySelectorAll(".operator")
let equal = document.getElementById("equal")
let clearButton = document.getElementById("clearButton")
let deButton = document.getElementById("DEButton")
let point = document.getElementById("point")
let input = document.querySelector("input")

input.value = "0"

let state = {
    previousNumber :  "",
    currentNumber : "",
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

    if (result == "Undefined") return "Undefined"
    return Math.round(result * 100) / 100 // arrondie
    
}

// When clicking a number 
for(let i = 0; i < numbers.length;++i) {
    numbers[i].addEventListener("click",()=> {
        
        let numberClicked = numbers[i].innerHTML
        
        // Flag
        if (state.lastActionWasEqual == true) {
            state.currentNumber = numberClicked
            
            console.log(state)
            updateInput()
            
            state.lastActionWasEqual = false
            return
        }

        // Cas normal
        state.currentNumber = state.currentNumber + numberClicked
        
        console.log(state)
        updateInput()
    })
}


// When clicking an operator 
for(let i = 0; i < operators.length;++i) {
    operators[i].addEventListener("click",()=> {
        
        // Flag
        if (state.lastActionWasEqual == true) {
            
            if (state.previousNumber == "") {
                operatorClicked = operators[i].innerHTML
                
                state.currentOperator = operatorClicked
                state.previousNumber = state.currentNumber 
                state.currentNumber = ""
                
                
                console.log(state)
                updateInput()
            }
            
            state.lastActionWasEqual = false
            return
        }
        
        // Cas normal
        if (state.previousNumber == "") {
            operatorClicked = operators[i].innerHTML
            
            state.currentOperator = operatorClicked
            state.previousNumber = state.currentNumber 
            state.currentNumber = ""
            
            console.log(state)
            updateInput()
            
        }
        else if (state.previousNumber !== "") {
            operatorClicked = operators[i].innerHTML
    
            // On utilise le bon operateur et pas celui qu'on a appuyé
            state.previousNumber = operate(state.currentOperator,state.previousNumber,state.currentNumber)
            // On actualise le nouvel operateur
            state.currentOperator = operatorClicked
            state.currentNumber = "" 
        
            console.log(state)
            updateInput() 
            
        }   
    }) 
    
}

// When clicking equal sign
equal.addEventListener("click",()=> {
    
    state.lastActionWasEqual = true
    
    try {
    // Je prends currentNumber en tant que resultat pcq après avoir appuyer sur egal je suis dans l'etape une où g currentNumber qui est le résultat obtenu et rien d'autre
    state.currentNumber = operate(state.currentOperator,state.previousNumber,state.currentNumber)
    
    // Vu que je veux continuer avec les operateurs il faut que je reinitialise les valeurs
    state.previousNumber = ""
    state.currentOperator = ""  
    
    console.log(state)
    updateInput()
    } 
    catch {
        input.value = "Error"
    }
})

// nombre décimaux
point.addEventListener("click",() => {
    
    // Seulement un point
    if (!(state.currentNumber.includes("."))) {
        state.currentNumber = state.currentNumber + "." 
        updateInput()
        console.log(state)
        
    }
})

// Clear input value and values 
function clear() {
    clearButton.addEventListener("click",()=>{
        state.currentNumber = ""
        state.currentOperator = ""  
        state.previousNumber = ""
        state.lastActionWasEqual = false

        console.log(state)
        updateInput()
    })
}

function updateInput() {
    console.log(state.previousNumber)
    console.log(state.currentNumber)
    console.log(state.currentOperator)
    console.log(state.lastActionWasEqual)
    
    if (state.currentNumber !== "" && state.previousNumber == "" && state.currentOperator == "") {
        return input.value = state.currentNumber
    }
    else if (state.currentNumber == "" && state.previousNumber !== "" && state.currentOperator !== "") {
        return input.value = state.previousNumber + state.currentOperator
        
    }
    else if (state.currentNumber !== "" && state.previousNumber !== "" && state.currentOperator !== "") {
        return input.value = state.previousNumber + state.currentOperator + state.currentNumber
        
    }
    else if (state.currentNumber == "" && state.previousNumber !== "" && state.currentOperator == "") {
        return input.value = state.previousNumber    
    }
    // Je l'ai fait specialement pour le delete boutton avec probleme que current etait "" du coup ca n'enlevait pas le dernier numero
    else if (state.currentNumber == "" && state.previousNumber == "" && state.currentOperator == "") {
        return input.value = state.currentNumber
    }
}

clear()

function removeCharacter(str) {
    let newString = str.slice(0, -1);
    return newString;
}

// When clicking delete button
deButton.addEventListener("click", () => {

    if (state.currentNumber !== "" && state.previousNumber == "" && state.currentOperator == "") {
        state.currentNumber = removeCharacter(state.currentNumber)
    }
    else if (state.currentNumber == "" && state.previousNumber !== "" && state.currentOperator !== "") {
        state.currentOperator = removeCharacter(state.currentOperator) 
    }
    else if (state.currentNumber == "" && state.previousNumber !== "" && state.currentOperator == "") {
        state.previousNumber = removeCharacter(state.previousNumber)
    }
    else if (state.currentNumber !== "" && state.previousNumber !== "" && state.currentOperator !== "") {
        //let input = state.previousNumber + state.currentOperator + state.currentNumber
        //input = removeCharacter(state.previousNumber + state.currentOperator + state.currentNumber)
    }


    console.log(state)
    updateInput()
    
    //state.lastActionWasEqual == false
    
    
    // CAS FLAG
    // En gros on fait rien qd c apres egal 
    if (state.lastActionWasEqual == true) {
        
        state.lastActionWasEqual = false
        return
    }
})





