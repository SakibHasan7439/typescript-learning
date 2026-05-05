class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    hourOfSleep(numberOfHour: number) {
        console.log(`${this.name} sleeps ${numberOfHour} hours a day`);
    }
}

class Student extends Person {
    constructor(name:string){
        super(name);
    }

    doStudy(numberOfHour: number) {
        console.log(`${this.name} studies ${numberOfHour} hours a day`);
    }
}


class Teacher extends Person {
    constructor(name:string){
        super(name);
    }

    takeClass(numOfHour: number){
        console.log(`${this.name} takes ${numOfHour} hours class per day`);
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if(isStudent(user)){
        user.doStudy(5);

    }else if(isTeacher(user)){
        user.takeClass(2);
        
    }else {
        console.log('no user found!');
    }
}

const std = new Student('Student');
const teacher = new Teacher('Teacher');

getUserInfo(std); 
getUserInfo(teacher); 