//varibles 

var a; //Declaración
var b = 'b'; // declaración y asignación
b = 'bb'; //reasiganción 
var a = 'aa'; // redeclaración


//Global Scope

var fruit = 'apple'; //Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//tener cuidado de no definir variables globales dentro de una funcion
function countries(){
    country = 'México';
    console.log(country);
}

countries();
console.log(country);