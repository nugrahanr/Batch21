"use strict";
class Cars {
    constructor(brand, speed, price) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getBrand() {
        return this.brand;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    setPrice(price) {
        this.price = price;
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
// const ferraris = new Cars();
const ferraris = new Cars('Ferrari', 220, 1000000);
// ferraris.brand = "Ferrari";
// ferraris.speed = 220;
// ferraris.price = 1000000;
ferraris.setSpeed(1000);
console.log(ferraris.getSpeed());
ferraris.move();
//# sourceMappingURL=Encasulaption.js.map