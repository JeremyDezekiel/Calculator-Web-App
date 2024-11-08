const screen = document.querySelector('.screen')

function btnSymbol(symbol) {
    const lastChar = screen.value.slice(-1)
    if (screen.value == '') {
        screen.value = ''
    } else if (lastChar != symbol) {
        screen.value += symbol
    }
}

function btnPoint(point) {
    const lastChar = screen.value.slice(-1)
    if (screen.value == '') {
        screen.value = '0' + point
    } else if (lastChar != point)
        screen.value += point
}

// function btnPlusMinus() {
//     const firstChar = screen.value.slice(0, +1)
//     if (firstChar != '+') {
//         firstChar.screen.value += '-'
//     }
// }

function btnNumb(num) {
    if (screen.value == '0') {
        screen.value = num
    } else {
        screen.value += num
    }
}

function btnZero(num) {
    if (screen.value == '0') {
        screen.value = num
    } else {
        screen.value += num
    }
}

function AC() {
    screen.value = ''
    result.innerText = '0'
}

function Del() {
    screen.value = screen.value.slice(0, -1)
    result.innerText = '0'
}

function equal() {
    if (screen.value == '') {
        screen.value = ''
    } else {
        try {
            result.innerText = eval(screen.value)
        }
        catch (error) {
            result.innerText = "ERROR"
        }
    }
}