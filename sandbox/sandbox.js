const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();
console.log(items,sortedItems)

const numbers = [10, 5, 3, 12, 22, 8];
const sortedNums = [...numbers].sort();
sortedNums.sort(function(a, b){
    return a - b;
});
console.log(numbers, sortedNums)

// this will return [10, 12, 22, 3, 5, 8 ]





items.sort(); // this will throw an error 


const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
const Lists = groceryList.map(item => `<p>${item}</p>`);
console.log(groceryList)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<p>${item}</p>` );
console.log(groceryList)



const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes)


const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 1 );
console.log(evens)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const iFoods = groceries.filter( item => item.includes("i") );
console.log(iFoods)
