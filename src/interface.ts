
// Interface can only be use in object type - [ array, function, object ]

interface user {
    name: string;
    age: number;
}

type role = {
    role: 'admin' | 'user';
}

type userWithRole = user & role;

const user1: user = {
    name: "sakib",
    age: 23
}


interface IUserWithRole extends user {
    role: 'admin' | 'user';
}


const admin: IUserWithRole = {
    name: "Abdullah",
    age: 32,
    role: 'admin'
}


interface IFriends {
    [index: number] : string
}

const friends: IFriends = ['A', 'B', 'C', 'D'];

interface IAdd {
    (num1: number, num2: number): number;
}

const result: IAdd = (num1, num2) => num1 * num2;

console.log(result(2, 3));