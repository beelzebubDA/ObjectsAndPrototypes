// Объекты и их прототипы


// Новый объект с пустыми свойствами
const person = {
    name: '',
    age: 0,
    nation: '',
    job: '',
    aboutMe() {
        console.log(`Hello, my name is ${this.name}!, I am ${this.job}`);
    }
}


// Добавление нового Объекта, персонажа с разными свойствами
const Diana = Object.create(person)
Diana.name = 'Diana'
Diana.age = 23
Diana.nation = 'Korean'
Diana.job = 'Business lady'

// Добавление нового Объекта, персонажа с разными свойствами
const Adam = Object.create(person)
Adam.name = 'Adam',
Adam.age = 25,
Adam.nation = 'Unknown',
Adam.job = 'Vacationist',

// Добавление нового свойства
Object.prototype.hello = function() {
    console.log(`Hello, ${this.name}!`);
}

console.log(Diana);
console.log(Diana.aboutMe());
console.log(Diana.hello());
console.log(Adam);
console.log(Adam.aboutMe());
console.log(Adam.hello());