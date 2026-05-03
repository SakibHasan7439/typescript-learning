
type genericArray<T> = Array<T>

const friends: genericArray<string> = ['imran', 'sadiq', 'tuhin'];

const rollNumber: genericArray<number> = [3, 5, 10];

const isEligible: genericArray<boolean> = [true, false, true];



type Coordinates<X, Y> = [X, Y]; 

const coordinates: Coordinates<number, number> = [20, 40];
const coordinates1: Coordinates<string, string> = ['20', '40'];


const userList: genericArray<{name: string; age: number}> = [
    {
        name: 'kabir',
        age: 43
    },

    {
        name: 'habib',
        age: 35
    }

]