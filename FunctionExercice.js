//Q1
// function addNumbers(number1, number2) {
//     return number1 + number2;
// }
// let caculatedNumber = addNumbers(1,2);
// console.log(caculatedNumber);
// //Q2
// function largestNumber(number1, number2) {
//     if (number1 > number2) {
//         return number1;
//     }
// }
// return number2;

// let biggerNumber = largestNumber(10,20);
// console.log(biggerNumber);
//Q3
// myPets = [
//     {
//     name: "Starlight",
//     species: "unicorn",
//     age: "300"
//     }, {
//         name: "Draco",
//         species: "Dragon",
//         age: "1050"
//     }, {
//         name: "Ariel",
//         species: "Mermaid",
//         age: "16" 
//     }]
//    function seperateArgument(myPets) {
//        for (let i = 0; i < myPets.length; i++) {
//            let argument = myPets[i];
//            console.log(argument);
           
//        }
//     }
//Q4
// function questionFour(name, age) {
//     return {
//         name: name, 
//         age: age
// }
// }
//     let Annette = questionFour("Annette", 37);
//     console.log(questionFour);
//Q5

let myPets = [
    {
    name: "Starlight",
    species: "unicorn",
    age: "300"
    }, {
        name: "Draco",
        species: "Dragon",
        age: "1050"
    }, {
        name: "Ariel",
        species: "Mermaid",
        age: "16" 
    }]

    function oldestAnimal(myPets) {
let oldest;
    for(let i = 0; i < myPets.length; i++) {
    let animal = array[i];
    if (oldestAnimal) {
        if (animal.age > oldestAnimal.age) {
            oldest = animal;
        }
    } else {
        oldest = animal;

    }
    }
    return oldest.name;
}

console.log(oldest(myPets));
    