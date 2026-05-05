class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    };

    getSleep(numOfHours: number){
        console.log(`Mr ${this.name} sleeps ${numOfHours} hours a day`);
    }
}

class Student extends Person {
    
}

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address);
        this.designation = designation;
    }

    takeClass(numOfHours:number){
        console.log(`Mr ${this.name} takes ${numOfHours} hour class each day`);
    }
}


const std1 = new Student('goodBoy', 18, 'Dhaka');
std1.getSleep(13);

const teacher = new Teacher('Motin', 40, 'Arifpur', 'Senior teacher');

teacher.takeClass(3);