class Store {
    constructor(pizzaSlicePrice, weekendDiscount, nightDiscount, bonus) {
        this.pizzaSlicePrice = pizzaSlicePrice || 25;
        this.weekendDiscount = weekendDiscount || 0;
        this.nightDiscount = nightDiscount || 0;
        this.bonus = bonus || 0;
    }
    totalPrise() {
        return this.pizzaSlicePrice - this.weekendDiscount - this.nightDiscount;
    }
    buyPizzaSlice() {
        return `Price after discount is ${this.totalPrise()} and you have ${this.bonus} bonuses`;
    }
}
const getDiscount = (obj) => {
    let date = new Date();
    if (date.getHours() === 23 || date.getDate() <= 6) {
        obj.nightDiscount = 2;
    } else {
        obj.nightDiscount = 0;
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        obj.weekendDiscount = 3;
    } else {
        obj.weekendDiscount = 0;
    }
};
const setBonus = (obj) => {
    obj.bonus += Math.floor(obj.totalPrise() / 10);
};
const pizza = new Store();
getDiscount(pizza);
setBonus(pizza);
console.log(pizza.buyPizzaSlice());