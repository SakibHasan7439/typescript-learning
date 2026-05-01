const user = {
    id: 130,
    name: {
        firstName: 'Md.',
        middleName: 'sakib',
        lastName: 'hasan'
    }
}

let {id: sakibId, name: {middleName}} = user;

console.log(middleName);