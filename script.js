const screen = document.querySelector('.screen')

function btnSymbol(symbol) {
    const lastChar = screen.value.slice(-1)
    if (screen.value == '') {
        screen.value = ''
    } else if (result.value == 'NaN') {
        screen.value = screen.value.slice(0, -2) + symbol
        result.value = ''
    } else if (result.value == 'Infinity') {
        screen.value = screen.value.slice(0, -2) + symbol
        result.value = ''
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        screen.value = screen.value.slice(0, -1) + symbol
    } else if (result.value != '') {
        screen.value = result.value + symbol
        result.value = ''
    } else if (lastChar != symbol) {
        screen.value += symbol
    }
}

function btnPoint(point) {
    const lastChar = screen.value.slice(-1)
    if (screen.value == '') {
        screen.value = '0' + point
        result.value = ''
    } else if (result.value == 'Infinity') {
        screen.value += point
        result.value = ''
    } else if (result.value == 'NaN') {
        screen.value += point
        result.value = ''
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        screen.value = screen.value
    } else if (lastChar != point)
        screen.value += point
}

function btnPlusMinus() {
    const firstChar = screen.value.slice(0, 1)
    if (firstChar != '-') {
        screen.value = '-' + screen.value
        result.value = ''
    } else
        screen.value = screen.value.slice(1)
}

function btnNumb(num) {
    const lastChar = screen.value.slice(-1)
    const sLastChar = screen.value.slice(-2, -1)
    if (screen.value == '0') {
        screen.value = num
        result.value = ''
    } else if (result.value == 'ERROR') {
        screen.value = screen.value + num
        result.value = ''
    } else if (result.value == 'Infinity' && lastChar == '0') {
        screen.value = screen.value.slice(0, -1) + num
        result.value = ''
    } else if (result.value == 'NaN' && lastChar == '0') {
        screen.value = screen.value.slice(0, -1) + num
        result.value = ''
    } else if (lastChar == '0' && sLastChar == '+') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '-') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '%') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '/') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (lastChar == '0' && sLastChar == '*' && result.value == '') {
        screen.value = screen.value.slice(0, -1) + num
    } else if (result.value != '') {
        result.value = ''
        screen.value = num
    } else {
        screen.value += num
    }
}

function btnZero(nol) {
    const lastChar = screen.value.slice(-1)
    const sLastChar = screen.value.slice(-2, -1)
    if (result.value == 'ERROR') {
        screen.value += nol
        result.value = ''
    } else if (result.value != '') {
        screen.value = nol
        result.value = ''
    } else if (screen.value == '0') {
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
    result.value = '0'
}

function Del() {
    screen.value = screen.value.slice(0, -1)
    result.value = ''
    if (screen.value == '') {
        result.value = '0'
    }
}

function equal() {
    const lastChar = screen.value.slice(-1)
    const sLastChar = screen.value.slice(-2, -1)
    if (screen.value == '') {
        screen.value = ''
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        result.value = 'ERROR'
    } else if (lastChar == '0' && sLastChar == '/') {
        result.value = 'Infinity'
    } else {
        result.innerText = eval(screen.value)
    }
}