1-IIFE
(function(a, b) {
    let min = (a < b) ? a : b;
    console.log(min); 
})(2, 5);

(function(a, b) {
    let min = (a < b) ? a : b;
    console.log(min); 
})(3, -1);

(function(a, b) {
    let min = (a < b) ? a : b;
    console.log(min); 
})(1, 1);

1-NFE 
const minFunc = function min(a, b) {
    return (a < b) ? a : b;
};

console.log(minFunc(2, 5)); 
