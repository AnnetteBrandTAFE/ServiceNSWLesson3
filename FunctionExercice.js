//Function Exercise

//Q1 Create a function that takes 2 arguments that are numbers and returns the sum of those numbers.

// function addNumbers(number1, number2) {
//     return number1 + number2;
// }
// let caculatedNumber = addNumbers(1,2);
// console.log(caculatedNumber);
// Output: 3

// Q2 Create a function that takes 2 arguments that are numbers and returns the largest of those
// numbers.

// function largestNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     return num2;
// }

// let biggerNumber = largestNumber(37, 1005);
// console.log(biggerNumber); //Output: 1005

// Q3 Create a function that takes 1 argument that is an array and prints each of the element 
// in that array to the console.

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
//     }
// ]
//    function seperateArgument(myPets) {
//        for (let i = 0; i < myPets.length; i++) {
//            let argument = myPets[i];
//            console.log(argument);
           
//        }
//     }

// Q4 Create a function that takes 2 arguments, name and age, and returns an object with properties 
//name and age set to the values passed in.

// function questionFour(name, age) {
//     return {
//         name: name, 
//         age: age,
// }
// }
//     let Annette = questionFour("Annette", 37);
//     console.log(Annette); //Output: { name: 'Annette', age: 37 }

// Q5 Create a function that takes 1 argument that is an array of objects representing people. 
// Each object should have a property name which should be a string and a property age which should 
// be a number. The function should return the name of the oldest person.

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
    function getOldest(array) {
        let oldestCurrent;
        for (let i = 0; i < array.length; i++) {
            let person = array[i];
            if (oldestCurrent) {
                if (person.age > oldestCurrent.age) {
                    oldestCurrent = person;
                }
            } else {
                oldestCurrent = person;
            }
        }
        return oldestCurrent.name;
    }
    console.log(getOldest(myPets)); //Output: Starlight
    