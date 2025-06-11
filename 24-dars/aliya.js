// // `1-savol`
// // function fib(n) {
// //     if (n == 0) return 0;
// //     if (n == 1) return 1;
// //     return fib(n - 1) + fib(n - 2);
// //   }
  
// //   let i = 0;
// //   while (i <= 5) {
// //     console.log(fib(i));
// //     i++;
// //   }
  
  
//   `2-savol`
//   function sumDigits(n) {
//     if (n === 0) {
//       return 0;
//     } else {
//       return (n % 10) + sumDigits(Math.floor(n / 10));
//     }
//   }
  
//   console.log(sumDigits(1234)); 
//   console.log(sumDigits(0));    
//   console.log(sumDigits(5));    

//   `3-savol`
//   function qavslar(n) {
//     let res = [];
  
//     function yoz(ochiq, yopiq, s) {
//       if (s.length === n * 2) {
//         res.push(s);
//         return;
//       }
  
//       if (ochiq < n) yoz(ochiq + 1, yopiq, s + "(");
//       if (yopiq < ochiq) yoz(ochiq, yopiq + 1, s + ")");
//     }
  
//     yoz(0, 0, "");
//     return res;
//   }
  
//   console.log(qavslar(3)); 
  
//   `4-savol`
//   function flaten(obj, old = "", natija = {}) {
//     for (let kalit in obj) {
//       let yangiKalit = old ? old + "." + kalit : kalit;
//       if (typeof obj[kalit] === "object" && obj[kalit] !== null) {
//         flaten(obj[kalit], yangiKalit, natija);
//       } else {
//         natija[yangiKalit] = obj[kalit];
//       }
//     }
//     return natija;
//   }
  

//   let obj = {
//     a: 1,
//     b: {
//       c: 2,
//       d: {
//         e: 3
//       }
//     }
//   };
  
//   console.log(flaten(obj));

//   `5-savol`
//   const boss = {
//     name: "Aliya",
//     salary: 1000,
//     subordinates: [
//       {
//         name: "Laylo",
//         salary: 800,
//         subordinates: []
//       },
//       {
//         name: "Zarina",
//         salary: 900,
//         subordinates: []
//       }
//     ]
//   };
//   function calcSalary(xodim) {
//     let jami = xodim.salary;
  
//     for (let bola of xodim.subordinates) {
//       jami += calcSalary(bola); 
//     }
  
//     return jami;
//   }
//   console.log(calcSalary(boss)); 
    