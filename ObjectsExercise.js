// Objects Exercise

// Q1 Create an object called me with 2 properties: name and age. 
// Set the name to be your name and the age to be your age.

let me = {
    name: "Annette",
    age: 37
};

// Q2 Use the increment operator to increase the value of your age once.

me.age++
console.log(me.age);
//Output: 38

// Q3 Add another property called hobbies and set the value to be an array of strings that represent 
//some of your hobbies, make sure the array has at least 3 values.

me.hobbies = [
    "Woodworking",
    "Gardening",
    "Silverwork"
];

// Q4 Add another property called Pets which should be an array of objects that represent your pets 
//(make some up if you don't have any). Each pet should have 3 properties: name, age and species.

me.pets = [
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

    }
]
for (let i = 0; i < me.pets.length; i++) {
        let pet = me.pets[i];
        console.log(`My ${pet.species} is ${pet.age} years old. Their name is ${pet.name}.`);
}
// Output:
// My unicorn is 300 years old. Their name is Starlight.
// My Dragon is 1050 years old. Their name is Draco.
// My Mermaid is 16 years old. Their name is Ariel.

// Q5 Use string concatenation to print out a list of your hobbies in a sentence. 
//This code should work even if you add more elements to the list. 
//Eg. "My hobbies are painting, drawing and exercising", 
//"My hobbies are painting, drawing, exercising and skydiving"

        me.hobbies = [
            "Woodwork",
            "Silverwork",
            "Gardening",
        ];
        let hobbies = "My hobbies are ";
        for (let i = 0; i < me.hobbies.length; i++) {
            let hobby = me.hobbies[i];
            hobbies += hobby;
            if(i == me.hobbies.length - 2) {
                hobbies += " and ";
            } else if (i == me.hobbies.length - 1){
                hobbies += ".";
            } else {
                hobbies += ", ";
            }
        }
        console.log(hobbies);

        // Output:
        // My hobbies are Woodwork, Silverwor and Gardening.