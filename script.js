let people = [
    {
        name: "bobur",
        age: 43,
        isMarried: false,
        wifes: ['kamila', 'safir', 'allayor']
    },
    {
        name: "ismail",
        age: 12,
        isMarried: true,
        wifes: ['nikita', 'malika']
    },
    {
        name: "allayor",
        age: 14,
        isMarried: true,
        wifes: ['denis', 'dima', 'dimon', 'xbegim']
    },
    {
        name: "sarodr ml",
        age: 18,
        isMarried: false,
        wifes: ['safiya']
    },
]

let guilty = [];
// Проверяем возраст человека
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age < 18) {
//         guilty.push(people[i].name)
//         document.write(people[i].name + " " + "guilty" + "<br>")
//     }
// }

// проверяем количество жен 
for (let j = 0; j < people.length; j++) {
    const wifes = people[j].wifes;
    let wifes_count = wifes.length;
    if (wifes_count > 1) {
        guilty.push(people[j].name)
        document.write(people[j].name + " " + "guilty" + "<br>")
    }
}


