let people = [
    {
        name: "Annette",
        age: 37
    },
    {
        name: "Helena",
        age: 40
    },
    {
        name: "Rosemary",
        age: 39
    },
    {
        name: "Mary",
        age: 70
    },
    {
        name: "Kevin",
        age: 75
    }
];

function searchByChar(array, searchTerm) {
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        let found = false;
        for(let i = 0; i < element.name.length; i++){
            let letter = element.name[i];
            if(letter.toLowerCase() == searchTerm.toLowerCase()){
                found = true;
            }
        }

        if(found) {
            resultArr.push(element);
        }
    }
    return resultArr;
}

console.log(searchByChar(people, "A"));