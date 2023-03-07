"use strict";
class Car {
    getBrand() {
        return this.brand;
    }
    ;
    getSpeed() {
        return this.speed;
    }
    getPrice() {
        return `$${this.price}`;
    }
    getName() {
        return this.brand;
    }
    ;
    move() {
        console.log(`${this.brand} berjalan dengan kencang`);
    }
    ;
}
const ferrari = new Car();
ferrari.brand = 'Ferrari';
ferrari.speed = 220;
ferrari.price = 1000000;
console.log(ferrari.getSpeed());
ferrari.move();
console.log(ferrari.price);
//# sourceMappingURL=OOP.js.map