

function logLength<T extends {length: number}>(input: T) {
    console.log(input.length);
}

logLength([2, 34, 34, 23])