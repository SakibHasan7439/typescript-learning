const getUser = (input: string | null) => {
    if(input) {
        console.log(`from db we got ${input}`);
    }else {
        console.log('from db: ALL USER');
    }
}

getUser(null)


const discountProductCalculator = (input: unknown) => {
    if(typeof input === 'number'){
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    }else if(typeof input === 'string'){
        const [discountPrice] = input.split(' ');
        console.log(Number(discountPrice) * 0.1);

    }else{
        console.log('wrong input');
    }
}

discountProductCalculator(100);
discountProductCalculator('100 taka');
discountProductCalculator(null);



const throwError = (msg: string): never => {
    throw new Error(msg);
}