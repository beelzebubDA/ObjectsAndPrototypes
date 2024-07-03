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
Diana.residence = 'Unknown'

// Добавление нового Объекта, персонажа с разными свойствами
const Adam = Object.create(person)
Adam.name = 'Adam',
Adam.age = 25,
Adam.nation = 'Unknown',
Adam.job = 'Vacationist',
Adam.residence = 'Unknown'

// Добавление нового свойства
Object.prototype.hello = function() {
    console.log(`Hello, ${this.name}!`);
}

// Добавление нового свойства
Object.prototype.residence = ""

console.log(Diana);
console.log(Diana.aboutMe());
console.log(Diana.hello());
console.log(Adam);
console.log(Adam.aboutMe());
console.log(Adam.hello());