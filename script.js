const screen = document.querySelector('.screen')

function btnSymbol(symbol) {
    const lastChar = screen.value.slice(-1)
    
    if (screen.value == '') {
        screen.value = ''
    } else if (result.value == 'NaN') {
        screen.value = screen.value.slice(0, -2) + symbol
        result.value = '0'
    } else if (result.value == 'Infinity') {
        screen.value = screen.value.slice(0, -2) + symbol
        result.value = '0'
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        screen.value = screen.value.slice(0, -1) + symbol
    } else if (result.value != '0') {
        screen.value = result.value + symbol
        result.value = '0'
    } else if (lastChar != symbol) {
        screen.value += symbol
    }
}

function btnPoint(point) {
    const lastChar = screen.value.slice(-1)
    if (screen.value == '') {
        screen.value = '0' + point
    } else if (result.value == 'Infinity') {
        screen.value += point
        result.value = '0'
    } else if (result.value == 'NaN') {
        screen.value += point
        result.value = '0'
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        screen.value = screen.value
    } else if (lastChar != point)
        screen.value += point
}

function btnPlusMinus() {
    const firstChar = screen.value.slice(0, 1)
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
    } else if (result.value == 'ERROR') {
        screen.value = screen.value + num
        result.value = '0'
    } else if (result.value == 'Infinity' && lastChar == '0') {
        screen.value = screen.value.slice(0, -1) + num
        result.value = '0'
    } else if (result.value == 'NaN' && lastChar == '0') {
        screen.value = screen.value.slice(0, -1) + num
        result.value = '0'
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
    } else if (result.value != '0') {
        result.value = '0'
        screen.value = num
    } else {
        screen.value += num
    }
}

function btnZero(nol) {
    const lastChar = screen.value.slice(-1)
    const sLastChar = screen.value.slice(-2, -1)
    if (screen.value == '0') {
        screen.value = nol
    } else if (result.value == 'ERROR') {
        screen.value += nol
        result.value = '0'
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
    const sLastChar = screen.value.slice (-2,-1)
    if (screen.value == '') {
        screen.value = ''
    } else if (lastChar == '+' || lastChar == '-' || lastChar == '%' || lastChar == '/' || lastChar == '*') {
        result.value = 'ERROR'
    } else if ( lastChar == '0' && sLastChar == '/') {
        result.value = 'Infinity'
    } else {
        result.innerText = eval(screen.value)
    }
}