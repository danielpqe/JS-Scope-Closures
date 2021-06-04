// SCOPE GLOBAL
var hello = 'Hello';
var hello = 'Hello +'; // var se puede sobreescribir pero es mala practica
let world = 'Hello world'; //no permite sobreescribir
const helloworld = 'Hello world';//no permite sobreescribir

const anotherFunctio = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
};

anotherFunctio();

const helloWorld = () =>{
    globalVar = 'Im global' //variable global, mala practica 
}

helloWorld()
console.log(globalVar)




