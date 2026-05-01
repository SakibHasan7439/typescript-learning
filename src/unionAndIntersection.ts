type UserRole = 'admin' | 'user';

const accessDashboard = (role: UserRole) => {
    if(role === 'admin'){
        return 'admin dashboard';
    }else if(role === 'user'){
        return 'user dashboard';
    }else {
        return 'guest dashboard';
    }
}

console.log(accessDashboard('admin'));


type Employee = {
    id: number;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const myself: EmployeeManager = {
    id: 130,
    name: 'sakib',
    phoneNo: '01644',
    designation: 'Manager',
    teamSize: 4
}

console.log(13 * 13);
console.log(myself);
