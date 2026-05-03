const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithObject = (value: {id: number, name: string}) => {
    return [value]
};

const createArrayWithGenericType = <T>(value: T) => {
    return [value];
}

const arrString = createArrayWithGenericType('sakib');
const arrNum = createArrayWithGenericType(10);
const arrObj = createArrayWithGenericType({
    id: 130,
    name: 'sakib'
});

console.log({arrString});
console.log({arrNum});
console.log({arrObj});


const createArrayTupleWithGeneric = <X, Y> (param1: X, param2: Y) => {
    return [param1, param2];
}

const tup1 = createArrayTupleWithGeneric("Sakib", false);
const tup2 = createArrayTupleWithGeneric(130, {
    id: 131,
    name: "Alpha"
});


const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        courseName: 'Next Level',
        ...studentInfo
    }
}

const student1 = {
    id: 130,
    name: 'Sakib',
    hasWatch: false,
}

const student2 = {
    id: 115,
    name: 'imran hossain',
    hasMobile: true,
    isMarried: false
}

const enrolledStudents = addStudentToCourse(student1);
console.log(enrolledStudents);