// Объекты и их прототипы


// Новый объект с пустыми свойствами
const person = {

    // Создаем универсальные свойства и функции
    name: '',
    age: 0,
    job: '',
    nation: '',
    phone: '',
    aboutMe() {
        console.log(`Hello, my name is ${this.name}!, I am ${this.job}`);
    },
    info() {
        console.group(`Информация о ${this.name} :`)
        console.log(`My name is ${this.name}`)
        console.log(`I am ${this.age} years old`)
        console.log(`I am a ${this.job}`)
        console.log(`I'm from ${this.nation}`)
        console.log(`I live in ${this.residence}`)
        console.log(`My phone number is ${this.phone}`)
        console.groupEnd()
    }

}


// Добавление нового Объекта, персонажа со свойствами
const Diana = Object.create(person)
Diana.name = 'Diana'
Diana.age = 23
Diana.nation = 'Korean'
Diana.job = 'Business lady'
Diana.residence = 'Unknown'
Diana.phone = '000 000-00-01'

// Добавление нового Объекта, персонажа со свойствами
const Adam = Object.create(person)
Adam.name = 'Adam',
Adam.age = 25,
Adam.nation = 'Unknown',
Adam.job = 'Vacationist',
Adam.residence = 'Unknown'
Adam.phone = '000 000-00-05'

// Другой метод добавление нового Объекта, персонажа со свойствами
const Zlata = {
    name: 'Zlata',
    age: 5,
    nation: 'Russian',
    job: 'Baby',
    residence: 'Unknown',
    phone: '000 000-00-02',
    residence: "Unknown"
}

// Добавление нового свойства
Object.prototype.hello = function() {
    console.log(`Hello, ${this.name}!`);
}
// Добавление нового свойства
Object.prototype.residence = ""

// Привязка свойства
const FnZlataBindInfo = person.info.bind(Zlata)()


// Методы вызова
console.log(Diana.info());
console.log(FnZlataBindInfo);
console.log(Adam.info());
// console.log(Diana);
// console.log(Diana.aboutMe());
// console.log(Diana.hello());
// console.log(Adam);
// console.log(Adam.aboutMe());
// console.log(Adam.hello());