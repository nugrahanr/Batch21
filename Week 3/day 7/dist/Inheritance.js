"use strict";
class Cars1 {
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
    getName() {
        return this.brand;
    }
    move() {
        console.log(`${this.brand} berjalan dengan kencang`);
    }
}
class Hennessey extends Cars1 {
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
class Koenigsegg extends Cars1 {
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
const tesla = new Cars1('Tesla', 250, 200000);
const venom = new Hennessey('Hennessey', 270, 1200000, 'Venom GT');
const agera = new Koenigsegg('Koenigsegg', 273, 2500000, 'Agera RS');
venom.move();
agera.move();
//# sourceMappingURL=Inheritance.js.map