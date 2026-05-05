class Counter {
    static count: number = 0;

    increment () {
        return (Counter.count += 1);
    }

    decrement () {
        return (Counter.count -= 1);
    }
}

const inst1 = new Counter();
const inst2 = new Counter();


console.log(inst1.increment());
console.log(inst2.increment());
console.log(inst2.increment());
console.log(inst2.decrement());