
class Animal {

    constructor(public name: string, public species: string, public sound: string, public averageSurvivalYears: number) {
    }

    makeSound(){
        console.log(`${this.name} is making sound!`);
    }
}

const dog = new Animal('Peko', 'normal', 'vaw vaw', 10);

dog.makeSound()