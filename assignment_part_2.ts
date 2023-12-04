import { v4 as uuidv4 } from 'uuid';

class Item {
    id: string;
    name: string;
    price: number;
    description: string;

    constructor(name: string, price: number, description: string) {
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class User {
    id: string;
    name: string;
    age: number;
    cart: Item[];

    constructor(name: string, age: number) {
        this.id = uuidv4();
        this.name = name;
        this.age = age;
        this.cart = [];
    }

    addToCart(item: Item): void {
        this.cart.push(item);
    }

    removeFromCart(itemId: string): void {
        this.cart = this.cart.filter(item => item.id !== itemId);
    }

    printCart(): void {
        console.log(this.cart);
    }
}

class Shop {
    items: Item[];

    constructor() {
        this.items = [];
    }

    addItem(item: Item): void {
        this.items.push(item);
    }
}

const myShop = new Shop();
const user = new User("Iron Man", 42);
const item1 = new Item("Apple", 0.99, "A fresh apple");
const item2 = new Item("Book", 12.99, "A fascinating novel");
myShop.addItem(item1);
myShop.addItem(item2);
user.addToCart(item1);
user.addToCart(item2);
user.printCart();
user.removeFromCart(item1.id);
user.printCart();
