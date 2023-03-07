"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Koenigsegg1 = exports.Hennessey1 = exports.Cars2 = void 0;
class Cars2 {
    constructor(brand, speed, price) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }
    getBrand() {
        return this.brand;
    }
    getSpeed() {
        return this.speed;
    }
    getPrice() {
        return `$${this.price}`;
    }
}
exports.Cars2 = Cars2;
class Hennessey1 extends Cars2 {
    constructor(brand, speed, price, model) {
        super(brand, speed, price);
        this.model = model;
    }
    /* Overriding */
    move() {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }
    getName() {
        return `${this.brand} ${this.model}`;
    }
}
exports.Hennessey1 = Hennessey1;
class Koenigsegg1 extends Cars2 {
    constructor(brand, speed, price, model) {
        super(brand, speed, price);
        this.model = model;
    }
    /* Overriding */
    move() {
        console.log(`${this.getName()} berjalan dengan kecepatan ${this.getSpeed()} mph`);
    }
    getName() {
        return `${this.brand} ${this.model}`;
    }
}
exports.Koenigsegg1 = Koenigsegg1;
//# sourceMappingURL=AbstractClass.js.map