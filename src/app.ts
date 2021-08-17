//Classes, Properties and Inheritance
class Sizes {
    constructor(public sizes: string[]) {}

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}
class Pizza extends Sizes{
    // name: string;
    toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
        // this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

// const sizes = new Sizes(['small', 'medium']);
// console.log(sizes);
// sizes.availableSizes = ['medium', 'large'];
// console.log(sizes);

//function Pizza(name: string) {
//    this.name = name;
//    this.toppings = [];
//}

//Pizza.prototype.addTopping = function addTopping(topping: string) {
//    this.toppings.push(topping);
//};

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni');
console.log(pizza);



/*/Diving into Interfaces
//type Pizza = {
//    name: string;
//    sizes: string[]
//};

interface Sizes {
    sizes: string[];
}
interface Pizza extends Sizes{
    name: string;
    toppings?: number;
    getAvailableSizes(): string[];
    [key: number]: string;
};

interface Pizzas {
    data: Pizza[]
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xyz';
pizza.toppings = 1;*/

/*/ Type Aliases and Assertions
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;
type Pizza = {name: string, toppings: number};

let pizzaSize: Size = 'small';

const selectSize: Callback = (x) => {
    pizzaSize = x;
};

selectSize('medium');

const pizza: Pizza = {name: 'Blazing Inferno', toppings: 5};
const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
    //return (<Pizza>JSON.parse(obj)).toppings;
    return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized);*/

/*/Typescript Types: Tuple Types for Arrays
// const pizza = ['Pepperoni', 20, '', 20, true];
let pizza: [string, number, boolean];
pizza = ['Pepperoni', 20, true];*/


/*/Typescript Types: Array Types and Generics
let sizes: string[]; //Array type
sizes = ['small', 'medium', 'large'];

let toppings: Array<string>; //Generic type
toppings = ['pepperoni', 'tomato', 'bacon'];*/


/*/Typescript Types: Object Types
let pizza: {name: string; price: number; getName(): string} = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return pizza.name;
    }
};

console.log(pizza.getName());*/

/*/ Typescript Types: Typed Functions and Default Params
let sumOrder = (price: number, quantity?: number): number;

sumOrder = (x, y = 1) => x * y;

const sum = sumOrder(25);
sumOrder(25, 5);

console.log(`Total sum: ${sum}`);*/


/*/Typescript Types: Function Types, Functions and Optional Arguments
//function sumOrder(price: number, quantity: number): number {
//    return price * quantity;
// }
// let sumOrder: Function;
// let sumOrder: (price: number, quantity: number) => number;
// let sumOrder: (price: number, quantity: number) => number = (x, y) => (x * y);

let sumOrder = (price: number, quantity?: number): number => {
    if(quantity) {
        return price * quantity;
    }
    return price;
}

const sum = sumOrder(25);
sumOrder(25, 2);

console.log(`Total sum: ${sum}`);*/

/*/Typescript Types: Union and Literal Types
let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('large');

console.log(`Pizza size: ${pizzaSize}`);*/

/*/Typescript Types: Null, Undefined, Strict Null checks
let coupon: string | null = 'pizza25';

function removeCoupon(): void {
    coupon = null;
    // coupon = undefined;
}

console.log(coupon);

removeCoupon();

console.log(coupon);*/

/*/Typescript Types: Never Type
function orderError(error: string): never {
    throw new Error(error);
    // never going to return a value!
}

orderError('Everything looks right');*/

/*/Typescript Types: The "Any" Type
let coupon;
coupon = 25;

coupon = '25';

coupon = true;*/


/*/Primitive Types: Boolean Type, Boolean Literals
const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if(offerDiscount(pizzas)) {
    console.log(`You're entitled to a discount!`);
} else {
    console.log(`Order more than 3 pizzas for a discount!`);
}*/


/*/Primitive Types: String Type, String Literals
const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);*/

/*/ Primitive Types: Number Types, arguments and functions
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}


const cost: number = calculatePrice(pizzaCost, pizzaToppings);

console.log(`Pizza costs: ${cost}`);*/

/*/ES6/7 and Typescript: Destructuring Arrays and Objects
const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order({ name, toppings }) {
    console.log(name, toppings);
}

const { pizzaName } = order(pizza);

const toppings = ['pepperoni', 'bacon', 'chilli'];

const [first, second, third] = toppings;

function logToppings([frst, second, third]: any) {
    console.log(first, second, third);   
}

logToppings(toppings);*/

/*/ES6/7 and Typescript: Object Spread Operator
const pizza = {
    name: 'Pepperoni'
};

const toppings = ['pepperoni'];

const order = {
    ...pizza,
    toppings,
};

const finalOrder = {...order };
console.log(finalOrder);*/