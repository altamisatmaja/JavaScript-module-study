// this with ecmascript arrow function 

const Person = () => {
    this.name = 'Kojek'
};

const PersonOne = new Person();
console.log(PersonOne.name);

const PersonTwo = new Person();
console.log(PersonTwo.name);

// contoh lain menggunakan arrow function

const Person1 = () => {
    this.name = 'Apalah'
    return {
        name
    }
}

const x = Person1();
console.log(x.name);

// memakai ecmascript dengan cara yang benar dalam OOP

const personaja = (jeneng_anyar) => {
    this.name = jeneng_anyar;

    return {
        name: this.name,
    };
};

const y = personaja('Al');
console.log(y.name);

// class constructor 

class Human {
    constructor() {
        this.name = 'Altamis'
        this.age = 19
    }
}

// constructor syntax 

class pPerson {
    constructor(namabaru, umurbaru) {
        this.name = namabaru
        this.age = umurbaru
    }
}

const info = new pPerson('Altamiss', 41);
console.log(info);
const info2 = new pPerson('Altamiss', 41);
console.log(info2.name)