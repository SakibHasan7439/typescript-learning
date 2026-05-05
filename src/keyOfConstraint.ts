type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle = 'car' | 'bike' | 'cng';
type MyVehicle1 = keyof RichPeopleVehicle;

const myTransport: MyVehicle1 = 'cng';

// console.log(myTransport);


type User = {
    name: string;
    age: number;

    address: {
        city: string;
    }
};
const user: User = {
    name: 'sakib',
    age: 23,

    address: {
        city: 'cng',
    }
};

const getPropertyObject = (obj: User, key: keyof User) => {
    return obj[key];
};

const res = getPropertyObject(user, "name");
console.log(res);