1 - IIFE
    (function (a, b) {
        let min = (a < b) ? a : b;
        console.log(min);
    })(2, 5);

(function (a, b) {
    let min = (a < b) ? a : b;
    console.log(min);
})(3, -1);

(function (a, b) {
    let min = (a < b) ? a : b;
    console.log(min);
})(1, 1);

1 - NFE
const minFunc = function min(a, b) {
    return (a < b) ? a : b;
};

console.log(minFunc(2, 5));



1.
    (function () {
        console.log("Salom, dunyo!");
    })();

2.
    (function (a, b) {
        console.log("Yig‘indi:", a + b);
    })(3, 5);

3.
    (function (n) {
        console.log("Kvadrati:", n * n);
    })(4);

4.
    (function () {
        let yil = new Date().getFullYear();
        console.log("Hozirgi yil:", yil);
    })();

5.
    (function (matn) {
        console.log(matn.split("").reverse().join(""));
    })("hello");



1.
let salomBer = function salom() {
    console.log("Assalomu alaykum!");
};
salomBer();

2.
let aniqla = function juftYokiToq(n) {
    if (n % 2 === 0) console.log("Juft");
    else console.log("Toq");
};
aniqla(7);

3.
let uchgaKopaytir = function kopaytir(n) {
    console.log(n * 3);
};
uchgaKopaytir(6);

4.
let minTop = function min(a, b) {
    console.log(a < b ? a : b);
};
minTop(8, 4);

5.
let uzunlik = function hisobla(str) {
    console.log("Uzunligi:", str.length);
};
uzunlik("JavaScript");

