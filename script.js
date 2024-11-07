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

btnOne.addEventListener('click', function(){
    if (screen.innerText == '0') {
        screen.innerText = '1'
    } else {
        screen.innerText += '1'
    }
})

btnTwo.addEventListener('click', function(){
    if (screen.innerText == '0') {
        screen.innerText = '2'
    } else {
        screen.innerText += '2'
    }
})

// function btnSymbol(symbol) {
//     if (screen.innerText == '0') {
//         screen.innerText = symbol
//     } else {
//         screen.innerText += symbol
//     }
// }

function btnSymbol(symbol) {
    if (screen.innerText == '0') {
        screen.innerText = symbol
    } else {
        screen.innerText += symbol
    }
}

function button(num) {
    if (screen.innerText == '0') {
        screen.innerText = num
    } else {
        screen.innerText += num
    }
}

function AC() {
    screen.innerText = ''
}

function Del() {
    screen.innerText = screen.innerText.toString().slice (0,-1)
}

function equal() {
    screen.innerText = eval(screen.innerText)
}