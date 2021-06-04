//JS no permite crear variables privadas de forma nativa, usando closures es una opcion

const person = () => {
    var saveName = "Maria";
    return {
        getName : () => {
            return saveName
        },
        setName : (name) => {
            saveName = name
        }
    }
}

newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Daniel')
console.log(newPerson.getName())