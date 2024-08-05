let groceries = ["Bread","Eggs","Milk","Tomatoes","Lettuce","Honey"];
console.log(groceries[1]);
console.log(groceries.length+1);
console.log(groceries[groceries.length-1]);
let poped = groceries.pop();
console.log(poped);
groceries.push("Salt","Pepper");
console.log(groceries);
let firstThreeItems = groceries.slice(0,3);
console.log(firstThreeItems);
groceries.splice(2,3);

groceries.unshift("Chocolate")

groceries.splice(0,2,"Kethup","chili");
console.log(groceries);