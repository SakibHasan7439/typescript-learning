type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
}

type ProductSummary = Pick<Product, "id" | "name" | "price">

type ProductWithoutStock = Omit<Product, "stock" | "color">

type ProductWithColor = Required<Product>

const product: ProductWithColor = {
    id: 12,
    name: "saerf",
    price: 43,
    stock: 10,
    color: 'green'
}

console.log(product);


const emptyObj: Record<string, unknown> = {};

const user = {
    id: 43,
    name: "sakib",
    phone: "017645435"
}