let me = {
    name: "Annette",
    age: 37
};
me.age++
console.log(me.age);

me.hobbies = [
    "Woodworking",
    "Gardening",
    "Silverwork"
];

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