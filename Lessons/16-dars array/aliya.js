// "1-png"//

let fruits = ["Apple", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); // javob: 4//

// "3-png"//

let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); // javob: ["a", "b", function]


