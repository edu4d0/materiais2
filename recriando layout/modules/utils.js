//utils.js Default import e export
expot default 'algum dado'

// ou, para um dado já existente
const text = 'alguma coisa' 
export default text

const message = "mensagem" 
export default message

export default function () {return 'alo'}


//utils.js named export

export const = Date.now()

// exportando um valor já existente
const double = number => number * 2 
export { double }

//exportando diversos
// export {today, double}


// Misto (named e default)

//utils.js
const Date = new Date()
const greeting = name => 'hello' ${name}

export default function (argument) {
    console.log(date, greeting(argument))
}

export { date, greeting }

// utils.js Import as

export function sum(a,b) {
    return a + b 
}

export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b

// ou
// export { sum, multiply, subtract, divide}


