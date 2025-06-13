// `1-savol`
// let a = [1, 2, 3, 4, 5];
// let b = [2, 4];
// let result = [];

// for (let i = 0; i < a.length; i++) {
//   let kerakmas = false;

//   for (let j = 0; j < b.length; j++) {
//     if (a[i] === b[j]) {
//       kerakmas = true;
//       break;
//     }
//   }

//   if (!kerakmas) {
//     result.push(a[i]);
//   }
// }

// console.log(result); 


// `2-savol`
// let arr = [5, 8, 6, 3, 4];


// let toq = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     toq.push(arr[i]);
//   }
// }


// for (let i = 0; i < toq.length; i++) {
//   for (let j = i + 1; j < toq.length; j++) {
//     if (toq[i] > toq[j]) {
//       let temp = toq[i];
//       toq[i] = toq[j];
//       toq[j] = temp;
//     }
//   }
// }


// let natija = [];
// let toqIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     natija.push(arr[i]);
//   } else {
//     natija.push(toq[toqIndex]);
//     toqIndex++;
//   }
// }

// console.log(natija); 

// `3-savol`
// let s = "Tez jigarrang tulki dangasa it ustidan sakrab o'tadi";
// let alfabe = "abcdefghijklmnopqrstuvwxyz";
// s = s.toLowerCase();
// let bor = "";

// for (let i = 0; i < alfabe.length; i++) {
//   let harf = alfabe[i];
//   let mavjud = false;

//   for (let j = 0; j < s.length; j++) {
//     if (s[j] === harf) {
//       mavjud = true;
//       break;
//     }
//   }

//   if (!mavjud) {
//     console.log(false);
//     break;
//   }

//   bor += harf;
// }

// if (bor.length === 26) {
//   console.log(true); 
// }

// `4-savol`
// let arr = [1, 1, 2, 3, 4, 4, 5, 6, 6];
// let natija = [];

// for (let i = 0; i < arr.length; i++) {
//   let son = arr[i];
//   let nechaMarta = 0;

//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === son) {
//       nechaMarta++;
//     }
//   }

//   if (nechaMarta === 1) {
//     natija.push(son);
//   }
// }

// console.log(natija); 

// `5-savol`
// function letter(a) {
//     let alf = ["a", "b", "c", "d", "e", "f"];
  
//     let start = alf.indexOf(a[0]);
  
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== alf[start + i]) {
//         let h = alf[start + i];
//         a.splice(i, 0, h);
//         break;
//       }
//     }
  
//     return a;
//   }
  
//   console.log(topHarf(["a", "b", "d", "e", "f"]));
  