type User = {
    id: number;
    name: {
        firstName: string,
        lastName ?: string
    };
    gender: 'male'| 'female';
    contactNo: string;
    address: {
        division: string,
        city: string
    }

}

const user1: User = {
    id: 130,
    name: {
        firstName: 'sakib',
        lastName: 'hasan'
    },
    gender: 'male',
    contactNo: '0164407',
    address: {
        division: 'Rajshahi',
        city: 'Pabna'
    }
}

console.log(user1);


type AddFunc = (
    num1: number,
    num2: number,
) => number;

const add: AddFunc = ((num1, num2) => num1 + num2);

console.log(add(5, 20));