// SCOPE LOCAL

const helloWorld = () => {
    const hello = 'Hello';
    console.log(hello)
}

helloWorld();
console.log(hello)

// ÁMBITO LÉXICO
var scope = 'I am global'

const functionScope = () => {
    var scope = 'I am just a local'
    const func = () => {
        return scope // En este punto se asume q 'escope' es local
    }
    console.log(func())
}

functionScope()
console.log(scope)

