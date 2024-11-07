const btnOne = document.querySelector('#btnOne')
const screen = document.querySelector('.screen')
const btnTwo = document.querySelector('#btnTwo')

// btnOne.addEventListener('click', function(){
//     screen.innerText = '1';
// })

// btnOne.addEventListener('click', function(){
//     if (screen.innerText == '0') {
//         screen.innerText = '1'
//     } else {
//         screen.innerText = screen.innerText + '1'
//     }
// })

// btnOne.addEventListener('click', function(){
//     if (screen.innerText == '0') {
//         screen.innerText = '1'
//     } else {
//         screen.innerText += '1'
//     }
// })

// btnTwo.addEventListener('click', function(){
//     if (screen.innerText == '0') {
//         screen.innerText = '2'
//     } else {
//         screen.innerText += '2'
//     }
// })

// function btnSymbol(symbol) {
//     if (screen.innerText == '0') {
//         screen.innerText = symbol
//     } else {
//         screen.innerText += symbol
//     }
// }

function btnSymbol(symbol) {
    if (screen.value == '0') {
        screen.value = symbol
    } else {
        screen.value += symbol
    }
}

function btnPoint(symbol) {
    if (screen.value == '0') {
        screen.value = '0' + symbol
    } else {
        screen.value += symbol
    }
}

// function btnSymbolTest() {
//     screen.value = "("
//     if (screen.value = "(") {
//         screen.value = ")"
//     }
// }

function btnNumb(num) {
    if (screen.value == '0') {
        screen.value = num
    } else {
        screen.value += num
    }
}

function AC() {
    screen.value = ''
    result.innerText = ''
}

function Del() {
    screen.value = screen.value.toString().slice (0,-1)
    result.innerText = '0'
}

function equal() {
    result.innerText = eval(screen.value)
}

// function btnSymbol(symbol) {
//     if (screen.innerText == '0') {
//         screen.innerText = symbol
//     } else {
//         screen.innerText += symbol
//     }
// }
// function btnSymbolTest() {
//     screen.innerText = "("
//     if (screen.innerText = "") {
//         screen.innerText = ")"
//     }
// }

// function btnNumb(num) {
//     if (screen.innerText == '0') {
//         screen.innerText = num
//     } else {
//         screen.innerText += num
//     }
// }

// function AC() {
//     screen.innerText = ''
// }

// function Del() {
//     screen.innerText = screen.innerText.toString().slice (0,-1)
// }

// function equal() {
//     screen.innerText = eval(screen.innerText)
// }