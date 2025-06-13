
// let i=0

// while(i<=10){
//     console.log(i);
//     i++;

// }


// let i=1 
// do { 
//     console.log(i);
//     i++;

// } while(false)


// let sum = 0;
// let count = 0;

// while (count < 10) {
//   let number = prompt("Raqam kiriting:");
//   number = Number(number); // Son ga aylantiramiz
//   sum += number;
//   count++;

//   if (sum >= 100) {
//     alert(`${count}-martada siz yig'indini 100 ga yetkazdingiz!`);
//     break;
//   }
// }

// if (sum < 100) {
//   alert(`10 martada ham yig'indi 100 ga yetmadi. Yakuniy yig'indi: ${sum}`);
// }

// "1-png"

// let summa = 0;
// let n = 0;

// do {
//   let son = +prompt("Son kiriting:");
//   summa = summa + son;
//   n = n + 1;
// } while (n < 5);

// let orta = summa / n;
// alert("O‘rtacha arifmetik: " + orta);

"2-png"

let kopaytma = 1;
let n = 0;

do {
  let son = +prompt("Son kiriting:");
  kopaytma = kopaytma * son;
  n = n + 1;
} while (n < 5);

let ortaGeometrik = Math.pow(kopaytma, 1 / n);
alert("O‘rtacha geometrik: " + ortaGeometrik);

