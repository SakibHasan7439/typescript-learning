const add = (num1: number | string, num2: number | string) => {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }else{
        return num1.toString() + num2.toString();
    }
};

// console.log(add(2, '2'));


type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: string;
}

const userInfo = (user: NormalUser | AdminUser) => {
    if('role' in user){
        console.log(`Mr ${user.name} has a role of ${user.role}`);
    }else{
        console.log(`Mr ${user.name}`);
    }
}

userInfo({name: 'name', role: 'admin'})