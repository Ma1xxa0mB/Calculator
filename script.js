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
    console.log(`This is float number1 ${number1}`)
    console.log(`This is float number2 ${number2}`)
    
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

// Identify the current number
for(let i = 0; i < numbers.length;++i) {
    numbers[i].buttonNumber.addEventListener("click",()=> {
        numberClicked = numbers[i].value
        console.log(`This is the number clicked ${numberClicked}`)
        currentNumber = currentNumber + numberClicked
        displayNumber(currentNumber)
        console.log(`This is the current number ${currentNumber}`)
    })
}

for(let i = 0; i < operators.length;++i) {
    operators[i].buttonOperator.addEventListener("click",()=> {
       
        operatorClicked = operators[i].value
        console.log(`This is the operator clicked ${operatorClicked}`)
        
        currentOperator = operatorClicked
        console.log(`This is the current operator ${currentOperator}`)
        displayNumberAndOperator(currentOperator)

        console.log(`This is the previous number ${previousNumber}`)
    
        if (previousNumber == "") {
            
            // Au moment où je clique sur un operator mon currentNumber devient previousNumber
            previousNumber = currentNumber 
            console.log(`This is the previous number ${previousNumber}`)
            
            currentNumber = ""
            console.log(`This is the current number ${currentNumber}`)
            
            previousOperator = currentOperator
            console.log(`This is the previous operator ${previousOperator}`)
        }
        else if (previousNumber !== "") {

            previousNumber = operate(previousOperator,previousNumber,currentNumber)
            console.log(`This is the previous number ${previousNumber}`)
            displayNumber(previousNumber)
            
            previousOperator = currentOperator 
            console.log(`This is the previous operator ${previousOperator}`)
            
            currentNumber = ""
            console.log(`This is the current number ${currentNumber}`)
        }   
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

// Gives the result when clicking equal
equal.addEventListener("click",()=> {
    console.log("equal clicked")
    console.log(previousNumber)
    console.log(previousOperator)
    console.log(currentNumber)
    result = operate(previousOperator,previousNumber,currentNumber) 
    console.log(result)
    displayNumber(result)
})

// Clear input value and values 
function clear() {
    clearButton.addEventListener("click",()=>{
        console.log("AC button clicked")
        input.value = "0"
        currentNumber = ""
        previousNumber = ""
        currentOperator = ""
        previousOperator = ""
    })
}

function displayNumber(number) {
    input.value = number
}

function displayNumberAndOperator(operator) {
    input.value = input.value + operator 
}

clear()




