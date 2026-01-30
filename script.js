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

let addition = document.getElementById("addition")
let subtraction = document.getElementById("subtraction")
let multiplication = document.getElementById("multiplication")
let division = document.getElementById("division")

let clearButton = document.getElementById("clearButton")

let input = document.querySelector("input")

let operators = [
    {
        "operator":addition,
        "value":"+"
    },
    {
        "operator":subtraction,
        "value":"-"
    },
    {
        "operator":multiplication,
        "value":"x"
    },
    {
        "operator":division,
        "value":"/"
    },
]

let numbers = [
    {
        "buttonNumber": n0,
        "value":0
    },
    {
        "buttonNumber": n1,
        "value":1
    },
    {
        "buttonNumber": n2,
        "value":2
    },
    {
        "buttonNumber": n3,
        "value":3
    },
    {
        "buttonNumber": n4,
        "value":4
    },
    {
        "buttonNumber": n5,
        "value":5
    },
    {
        "buttonNumber": n6,
        "value":6
    },
    {
        "buttonNumber": n7,
        "value":7
    },
    {
        "buttonNumber": n8,
        "value":8
    },
    {
        "buttonNumber": n9,
        "value":9
    },

]

// Pour le display
let number1 
let operator 
let number2 

function add(a,b) {
    return a + b
}

function substract(a,b) {
    return a-b  
}

function multiply(a,b) {
    return a*b 
}

function divide(a,b) {
    return a/b
}

function operate(operator,number1,number2) {
    if(operator === "+") {
        return add(number1,number2)
    }
    else if (operator === "-") {
        return substract(number1,number2)
    }
    else if (operator === "x") {
        return multiply(number1,number2)
    }
    else if (operator === "/") {
        return divide(number1,number2)
    }
}


function updateOperator() {
    for(let i = 0; i < operators.length;++i) {
        //console.log(operators[i].operator)
        operators[i].operator.addEventListener("click",()=> {
            operator = operators[i].value;
            console.log(`This is the operator clicked ${operator}`)
            input.value = input.value + operator
            console.log(`This is the input value from updateOperator function ${input.value}`)
            console.log(`This is the length of the input ${input.value.length}`)
            
            let list = []
            for (let i = 0; i < input.value.length;++i) {
                //console.log(input.value[i])
                console.log(parseInt(input.value[i]))
                //console.log(typeof(parseInt(input.value[i])))
                if(!(Number.isNaN(parseInt(input.value[i])))) {
                    list.push(parseInt(input.value[i]))
                    console.log(list)

                }
            }
            joinList = list.join()
            // Garder en string et le mettre en numero au moment du calcul
            number1InString = joinList.replaceAll(",","")
            console.log(number1InString)
            console.log(typeof(number1InString))
            

        })
    }
}

// Fonction qui a uniquement utilité de
function updateNumber1() {
    for(let i = 0; i < numbers.length;++i) {
        //console.log(numbers[i].buttonNumber)
        //console.log(numbers[i])
        numbers[i].buttonNumber.addEventListener("click",()=> {
            number1 = numbers[i].value
            console.log(`This is the number clicked ${number1}`)
            input.value = input.value + number1
            console.log(typeof(number1))
            console.log(`This is the input value from updateNumber1 function ${input.value}`)
            console.log(`This is the length of the input ${input.value.length}`)
                
        })
    }
}

function findNumber1() {
    updateNumber1()
    updateOperator()
} 

function findNumber2() {
    

} 




// function findNumber1() {
//     for(let i = 0; i < operators.length;++i) {
//         operators[i].operator.addEventListener("click",()=>{
//             let number1WithOperator = input.value
//             number1 = number1WithOperator.slice(0,-1)
//             console.log(number1)
//             //console.log(typeof(number1))
//         })
//     }
// }

// // C ce qui est entre un operateur et un autre operateur ou un egal
// function findNumber2() {
//     for(let i = 0; i < operators.length;++i) {
//         console.log(`this is the operator buttons ${operators[i].operator}`)
//         operators[i].operator.addEventListener("click",()=>{
//             console.log(`this is the input value ${input.value}`)
//             if(input.value.includes("+"||"-"||"x"||"/")){
//                 number2=""
//             }
        
//             //console.log(number1)
//             //console.log(typeof(number1))
//         })
//     }
// }


// Clear input value
clearButton.addEventListener("click",()=>{
    input.value = ""
})


findNumber1()
findNumber2()

operate(operator,number1,number2)


