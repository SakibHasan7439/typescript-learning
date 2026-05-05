type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

function getProfile(employee:Employee) {
    return `Name: ${employee?.name}, Role: ${employee.role}`;
}

const employee: Employee = {
    name: "Nafis",
    age: 25,
    role: "Sales Executive",
    salary: 40000
}

console.log(getProfile(employee));