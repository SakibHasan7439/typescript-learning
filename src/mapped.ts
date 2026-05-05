const arrayOfNum = [1, 2, 3, 4];

const arrayOfString = arrayOfNum.map((num) => num.toString());

console.log(arrayOfString);

type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum["height"];

type AreaOfString = {
    [key in "height" | "width"] : string;
}
type Area<T> = {
    [key in keyof T] : T[key];
}

const area1: Area<{height: string; width: boolean}> = {
    height: '50',
    width: false
}