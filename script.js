const screen = document.querySelector('.screen')

function btnSymbol(symbol) {
    const lastChar = screen.value.slice(-1)
    if (screen.value == '') {
        screen.value = ''
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        screen.value = screen.value.slice(0, -1) + symbol
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

function btnPlusMinus() {
    const firstChar = screen.value.slice(0, 1)
    console.log(firstChar)
    if (firstChar != '-') {
        screen.value = '-' + screen.value
    } else
        screen.value = screen.value.slice(1)
}

function btnNumb(num) {
    const lastChar = screen.value.slice(-1)
    const sLastChar = screen.value.slice(-2, -1)
    if (screen.value == '0') {
        screen.value = num
    } else if (lastChar == '0' && sLastChar == '+') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '-') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '%') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '/') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '*') {
        screen.value = screen.value.slice(0, -1) + num
    } else {
        screen.value += num
    }
}

function btnZero(nol) {
    const lastChar = screen.value.slice(-1)
    const sLastChar = screen.value.slice(-2, -1)
    if (screen.value == '0') {
        screen.value = nol
    } else if (lastChar == '0' && sLastChar == '+') {
        screen.value = screen.value.slice(0, -1) + '0'
    } else if (lastChar == '0' && sLastChar == '-') {
        screen.value = screen.value.slice(0, -1) + '0'
    } else if (lastChar == '0' && sLastChar == '%') {
        screen.value = screen.value.slice(0, -1) + '0'
    } else if (lastChar == '0' && sLastChar == '/') {
        screen.value = screen.value.slice(0, -1) + '0'
    } else if (lastChar == '0' && sLastChar == '*') {
        screen.value = screen.value.slice(0, -1) + '0'
    } else {
        screen.value += nol
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
    const lastChar = screen.value.slice(-1)
    if (screen.value == '') {
        screen.value = ''
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        result.value = 'ERROR'
    } else {
        result.innerText = eval(screen.value)
    }
}