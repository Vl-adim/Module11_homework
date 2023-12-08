let x = prompt('введи число', '')
let n = prompt('введи степень', '')

if (n < 0) {
    console.log('степень должна быть больше нуля')
}

function pow(x, n) {
    return x ** n;
}

let result = x ** n
console.log(result)
pow(x, n);