const addStudentToCourse = <T extends {id: number; name: string}>(studentInfo: T) => {
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

const student3 = {
    isMarried: false
}



const enrolledStudents = addStudentToCourse(student2);
console.log(enrolledStudents);