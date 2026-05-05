class Person {
    getSleep(){
        console.log(`I am a normal person so i sleep 8 hour a day`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I am a student, so i sleep 7 hour a day`);
    }
}

class NextLevelStudent extends Person {
    getSleep() {
        console.log(`I am a next level dev, so i sleep 6 hour a day`);
    }
}

const getSleepingHour = (params: Person) => {
    params.getSleep();
}

const person = new Person();
const person1 = new Student();
const person2 = new NextLevelStudent();

getSleepingHour(person);
getSleepingHour(person1);
getSleepingHour(person2);


class Shape {
    getArea(){
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangular extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}