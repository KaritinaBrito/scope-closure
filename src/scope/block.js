function fruits(){
    if(true) {
        var fruit1 = 'Apple';  //function scope, por declaracion de var
        let fruit2 = 'Kiwi';// block scope, solo se pueden utilzar dentro del bloque mismo 
        const fruit3 = 'Watermelon';// block scope, solo se pueden utilzar dentro del bloque mismo 

        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
}

fruits();