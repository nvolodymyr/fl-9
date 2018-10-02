'use strict';
function Product (name, description, price ){
this.name=name;
this.description=description;
let historyLog=[];
this.cartDate;
this.cartPlace='';

this.getPrice=function(){
    return price;
}
this.setPrice=function(newPriceValue){
    if(newPriceValue>price){
        historyLog.push( `Change price fron ${price} to ${newPriceValue} `);
        price=newPriceValue;
    }else{
        historyLog.push( `Try change value from ${price} to ${newPriceValue}`);
    }
    return this;
}
this.add=function(value){
    this.cartPlace=value;
    historyLog.push(`${this.name} is added to ${this.cartPlace} on ${this.cartDate}. `);
    return this;
}
this.removeProduct=function(value){
    this.cartPlace='';
    historyLog.push(` ${this.name} is remove from ${value} on ${getDatecreate()} `);
    return this;
}
this.getHistory=function(){
    historyLog.forEach((elem) => console.log(elem));
}
}
 function getDatecreate(){
     return new Date();
 }

function ShoppingCart(name, owner, maxCount){
this.name=name;
let history=[];
let productArray=[];
history.push(`${this.name} was created ${new Date()}, by ${owner}`);

this.addNewProduct = function(value){
    if(value instanceof Product){
        if(!value.cartPlace){
            if(productArray[maxCount-1]){
                value.cartDate=getDatecreate();
                productArray.push(value);
                history.push(`${value.name} was added to ${this.name} on ${getDatecreate()} `);
                
                
            }else{
                let minPrice = productArray[0].getPrice();
                let position = 0;
    
                for (let i = 0; i < productArray.length; i++) {
                    if (productArray[i].getPrice() < minPrice) {
                        minPrice = productArray[i].getPrice();
                        position = i;
            }
        }
        history.push(`${productArray[position].name} removed from ${this.name} on ${new Date()}`);
        productArray[position].removeProduct(this.name);
        productArray.splice(position,1);
        value.cartDate=getDatecreate();
        history.push(`${value.name} was added to ${this.name} on ${value.cartDate}`);
        productArray.push(value);
    }
    value.add(this.name);
    } else if(value.cartPlace===this.name){
        this.removeProduct(value);
        this.addNewProduct(value)
    }else{
        console.log(`${value.name} do not use...`)
    }
    } else {
        console.log(`Pleace try again...`)
    }
    return this;
    }
this.removeProduct=function(value){
   if(value instanceof Product){
       let index=productArray.indexOf(value);
       history.push(`${productArray[index].name} was delete from ${this.name} on ${new Date()}`);
       productArray[index].removeProduct(this.name);
       productArray.splice(index,1);
   }
   return this;
    
}
this.getAveragePrice =function(){
    return this.getTotalPrice()/productArray.length;

}
this.getTotalPrice =function(){
    let sumTotalPrice=0;
    for (let i = 0; i < productArray.length; i++) {
        sumTotalPrice += productArray[i].getPrice();
    }
    return sumTotalPrice;
}
this.getProducts=function(){
    return productArray;
}
this.getFormattedListOfProducts=function(){
    return this.getProducts().map(val =>
        `${val.name} - is on ${this.name} from ${val.cartDate}, \
        description: ${val.description} `); 
   
}

this.getHistory = function(){
    history.forEach(log => console.log(log));
}
}
////////////////
let brendonShopCart = new ShoppingCart('Brenda', 'Brenda', 5);

let banana = new Product('banana', {
    color: 'yellow',
    size: 'medium'
}, 22);
let apple = new Product('apple', {
    color: 'red',
    size: 'medium'
}, 22);
let avokado = new Product('avokado', {
    color: 'green',
    size: 'big'
}, 22);


brendonShopCart.addNewProduct(banana).addNewProduct(avokado).addNewProduct(apple);
brendonShopCart.history();


