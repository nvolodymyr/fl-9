'use strict';
function Product (name, description, price ){
this.name=name;
this.description=description;
let _price=price;
let historyLog=[];
let cardNameAdd='';
this.getPrice=function(){
    return _price;
}
this.setPrice=function(newPriceValue){
    if(newPriceValue>_price){
        historyLog.push( `Change price fron ${_price} to ${newPriceValue} `);
        _price=newPriceValue;
    }else{
        historyLog.push( `Try change value from ${_price} to ${newPriceValue}`);
    }
    return this;
}
this.add=function(value){
    cardNameAdd=value;
    historyLog.push(`${this.name} is added to ${cardNameAdd} on ${new Date()}. `);
    return this;
}
this.remove=function(value){
    cardNameAdd='';
    historyLog.push(` ${this.name} is remove from ${value} on ${new Date()} `);
    return this;
}
this.getHistory=function(){
    historyLog.forEach((elem) => console.log(elem));
}
}


function ShoppingCart(name, owner, maxCount){
this.name=name;
this.owner=owner;
this.maxCount=maxCount;
let history=[];
let productArray=[];
let dateOdAddingToCart=[];
history.push(`${this.name} was created ${new Date()}, by ${this.owner}`);

this.addNewProduct=function(value){
if(value instanceof Product){
if(productArray.length!==this.maxCount){
    productArray.push(value);
    history.push(` ${value.name} was added to ${this.name} on ${new Date()} `);
}else{
    let minPriceValue=productArray[0].getPrice();
    let index=0;
    for (let i = 0; i < productArray.length; i++){
        if(productArray[i].getPrice()<minPriceValue){
            minPriceValue=productArray[i].getPrice();
            index=i;
        }
    }
    productArray.splice(index,1);
    productArray.push(value);
   
}
value.add(this.name);
history.push(`${value.name} was added to  ${this.name} on ${new Date()} `);

}else{
    console.log(` Bad value`);
}
return this;
}
this.removeProduct=function(id){
    if(id>productArray.length){
        console.warn(`ID is incorect.... try again`);
    }
        dateOdAddingToCart.push(new Date());
        // history.push(` ${productArray[id-1].name} was removed from ${ this.name } on ${new Date()} `);
        // productArray[id-1].removeProduct(this.name);
        productArray.slice(id-1,1);
        return this;
    
}
this.getAveragePrice =function(){
    let average=0;
    productArray.forEach(price => {
        average+=price.getPrice();
    });
    return average/productArray.length;

}
this.getProducts=function(){
    return productArray;
}
this.getFormattedListOfProducts=function(){
    return productArray.forEach(form => console.log(`${form.name} - is ${this.name} from
    ${productArray.indexOf(form)}.Detailed product description: ${form.description} `));
}
this.getTotalPrice =function(){
    let sumTotalPrice=0;
    productArray.forEach(elem => {
sumTotalPrice+=elem.getPrice();
    });
    return sumTotalPrice;
}
this.getHistory = function(){
    history.forEach(log => console.log(log));
}
}
const banana = new Product({
    name: 'banana',
    description: {
      color: 'yellow',
      size: 'medium'
    },
    price: 45
  });
  
  const apple = new Product({
    name: 'apple',
    description: {
      color: 'red',
      size: 'small'
    },
    price: 30
  });
  
  const stevesShopCart = new ShoppingCart({
    name: 'stevesCart',
    owner: 'Steve',
    maxSize: 5
  });
  
  stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(apple)
    .removeProduct(banana)
   
  
  
  