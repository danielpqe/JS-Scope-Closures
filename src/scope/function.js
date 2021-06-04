// ESCOPE EN LAS FUNCIONES

const fruit = () => {
    var fruits = 'apple'
    console.log(fruits)
}

fruit()
console.log(fruits)


const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1 // usar solo let en el scope local, good practice
    //let y = 2 // no es reasignable
    console.log(x)
    console.log(y)
}

anotherFunction()