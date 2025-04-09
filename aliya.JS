"1-png"                               javob: { a: 2, b: 2, c: 2, d: 1 }
let a=1, b=1;

let c=++a; 
let d=b++;


console.log({ a, b, c, d });

"2-png"                                          javob: 4 5
let a = 2;                                   
let x = 1 + (a *= 2);
console.log(a, x);

"3-png"
console.log("" + 1 + 0);           // "10"
console.log("" - 1 + 0);           // -1
console.log(true + false);         // 1
console.log(6 / "3");              // 2
console.log("2" * "3");            // 6
console.log(4 + 5 + "px");         // "9px"
console.log("$" + 4 + 5);          // "$45"
console.log("4" - 2);              // 2
console.log("4px" - 2);            // NaN
console.log("  -9  " + 5);         // "  -9  5"
console.log("  -9  " - 5);         // -14
console.log(null + 1);             // 1
console.log(undefined + 1);        // NaN
console.log(" \t \n" - 2);         // -2


"4-rasm"

console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

"5-rasm"

alert(null || 2 || undefined);            //javob: 2


"6-rasm"

alert (alert(1)||2||alert(1));   //chiqmadi

"7-rasm"
alert (1 && null && 2) chiqmadi

"8-rasm"
 alert(alert(1) && alert(2));        //javob 1 va undefined

 "9-rasm"

 alert( null || 2 && 3 || 4);             // javob 3





