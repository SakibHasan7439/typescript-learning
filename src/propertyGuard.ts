


function getProductProp<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}


const product = { id: 101, name: "Keyboard", price: 50 };

console.log(getProductProp(product, "id"));