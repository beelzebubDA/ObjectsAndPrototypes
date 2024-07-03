// Объекты и их прототипы


// Новый объект с пустыми свойствами
const person = {

    // Создаем универсальные свойства и функции
    name: '',
    age: 0,
    job: '',
    nation: '',
    aboutMe() {
        console.log(`Hello, my name is ${this.name}!, I am ${this.job}`);
    },
    info() {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`I am a ${this.job}`);
        console.log(`I'm from ${this.nation}`);
        console.log(`I live in ${this.residence}`);
    }

}


// Добавление нового Объекта, персонажа со свойствами
const Diana = Object.create(person)
Diana.name = 'Diana'
Diana.age = 23
Diana.nation = 'Korean'
Diana.job = 'Business lady'
Diana.residence = 'Unknown'

// Добавление нового Объекта, персонажа со свойствами
const Adam = Object.create(person)
Adam.name = 'Adam',
Adam.age = 25,
Adam.nation = 'Unknown',
Adam.job = 'Vacationist',
Adam.residence = 'Unknown'

// Другой метод добавление нового Объекта, персонажа со свойствами
const Zlata = {
    name: 'Zlata',
    age: 5,
    nation: 'Russian',
    job: 'Baby',
    residence: 'Unknown',
}

// Добавление нового свойства
Object.prototype.hello = function() {
    console.log(`Hello, ${this.name}!`);
}
// Добавление нового свойства
Object.prototype.residence = ""


// Методы вызова
console.log(Diana.info());
console.log(Adam.info());
console.log(person.info.bind(Zlata)());
// console.log(Diana);
// console.log(Diana.aboutMe());
// console.log(Diana.hello());
// console.log(Adam);
// console.log(Adam.aboutMe());
// console.log(Adam.hello());