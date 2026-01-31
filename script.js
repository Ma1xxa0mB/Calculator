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
    number1 = parseInt(number1)
    number2 = parseInt(number2)
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


function  updateOperatorAndFindNumber1() {
    let number1InString = "" // Fiche pour savoir pk
    let number2InString = "" // Fiche pour savoir pk
    for(let i = 0; i < operators.length;++i) {
        //console.log(operators[i].operator)
        operators[i].operator.addEventListener("click",()=> {
            operator = operators[i].value;
            console.log(`This is the operator clicked ${operator}`)
            input.value = input.value + operator
            console.log(`This is the input value from updateOperator function ${input.value}`)
            console.log(`This is the length of the input ${input.value.length}`)
            
            // Trouver le nombre d'operateurs grace au fait que les operateur vont devenir NaN donc je com
            let listForCountNaN = []
            let numberOfNaN = 0
            let listForFirstOperator = []

            for (let i = 0; i < input.value.length;++i) {
                listForCountNaN.push(parseInt(input.value[i]))
                listForFirstOperator.push(input.value[i])
                if(Number.isNaN(parseInt(input.value[i]))) {
                    numberOfNaN = numberOfNaN + 1
                }
            }
            console.log(`This is the number of NaN ${numberOfNaN}`)
            console.log(`This is list for NaN count ${listForCountNaN}`)
            console.log(`This is list for stock first operator ${listForFirstOperator}`)

            if(numberOfNaN == 1 ) {

                // Find first operator
                for (let i = 0; i < listForFirstOperator.length;++i) {
                    firstOperator = listForFirstOperator[i]
                    console.log(`This is the first operator ${firstOperator}`)
                }
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
                console.log(`this number1 ${number1InString}`)
                console.log(typeof(number1InString))
                
            }

            if(numberOfNaN == 2 ) {
                console.log("I'm in if number 2")
                let list2 = []
                for (let i = 0; i < input.value.length;++i) {
                    console.log(`this the characters in if 2 ${parseInt(input.value[i])}`)
                    list2.push(parseInt(input.value[i]))
                }
                console.log(list2)

                // Obtenir numero 2 : Tant que je n'ai pas rencontré un NaN je ne stock pas de numero
                encounterNaN = 0
                number2ListWithNaNAtStart = []
                for (let i = 0; i < list2.length;++i) {
                    if(Number.isNaN(list2[i])) {
                        encounterNaN = encounterNaN + 1
                    }

                    if (encounterNaN == 1) {
                        number2ListWithNaNAtStart.push(list2[i])
                    }
                }
                console.log(number2ListWithNaNAtStart)

                // number2List a le NaN au debut du coup je crée une liste sans NaN
                number2List = []
                for(let i = 0; i < number2ListWithNaNAtStart.length;++i) {
                    if(!(Number.isNaN(number2ListWithNaNAtStart[i]))) {
                        number2List.push(number2ListWithNaNAtStart[i])
                    }
                }
                console.log(`This the number2List without NaN at the start ${number2List}`)
                number2JoinList = number2List.join()
                // Garder en string et le mettre en numero au moment du calcul
                number2InString = number2JoinList.replaceAll(",","")
                console.log(`this number2 ${number2InString}`)
                console.log(`This is operate ${operate(firstOperator,number1InString,number2InString)}`)// PK ici Fiche
                
                
                input.value = operate(firstOperator,number1InString,number2InString) + operator
                // Le résultat de l'operation devient le number1 pour continuer la boucle
                number1InString = operate(firstOperator,number1InString,number2InString)
                // On actualise aussi le nouvel operateur
                firstOperator = operator
            }            
        }) 
    }
}

// Affiche le numero cliqué dans l'input
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

// Clear input value
clearButton.addEventListener("click",()=>{
    input.value = ""
})

updateNumber1()
updateOperatorAndFindNumber1()


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



