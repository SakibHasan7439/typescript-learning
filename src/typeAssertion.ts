// let anyType: any;

// anyType = "string";

// (anyType as string)

const kgToGramConverter = (input: number | string): string | number | undefined => {
    if(typeof input === 'number'){
        return input * 1000;
    }else if(typeof input === 'string'){
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value) * 1000}`;
    }
}

const result1 = kgToGramConverter(5) as number;
console.log('result1 :>> ', result1);

const result2 = kgToGramConverter('3 kg') as string;
console.log('result2 :>> ', result2);

