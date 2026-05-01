function addValue(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addValue(10, 23));

const mulArrow = (n1: number, n2: number): number => {
    return n1 * n2;
}

console.log(mulArrow(5, 4));


const goribUser = {
    name: 'sakib',
    balance: 0,

    addBalance (value: number): number{
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

goribUser.addBalance(1000);

console.log(goribUser);

const arr: number[] = [1, 2, 3];

const makeSquare = arr.map((el: number): number => el * el);
console.log(makeSquare);