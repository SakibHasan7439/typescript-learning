const bazarList: string[] = ['meat', 'fish', 'eggs', 'banana'];

let mixedArr: (string | number)[] = ['apple', 5, 'banana', 12, 'mango', 10];

console.log(mixedArr);

let coordinate: [number, number] = [10, 40];

let sakibNameAndRoll: [string, number] = ['sakib', 130];


const user: {
    readonly company: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    firstName: 'Md.',
    middleName: 'sakib',
    lastName: 'hasan',
    isMarried: false,
    company: 'ABSS Software solution'
}

console.log(user);