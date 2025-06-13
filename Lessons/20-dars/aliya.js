// let people = [
//   { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
//   { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
//   { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
//   { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
//   { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
//   { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
//   { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
//   { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
// ];

  // 1
//   people = people.map(p =>
//     p.id === 5
//       ? { id: 5, firstName: "Ali", lastName: "Valiyev", age: 25, status: "Dasturchi" }
//       : p
//   );
//   console.log(people);

// //   // 2
// //   people = people.filter(p => p.lastName.endsWith("va"));
// //   console.log(people);

// ople = people.filter(p => p.id !== 4 && p.id !== 9);

//   console.log(people);
//   // //   // 3

  // 4
//   people = people.map(p =>
//     p.id === 7 ? { ...p, firstName: "Gulbashakar" } : p
//   );
//   console.log(people);

// //   // 5
// //   people.sort((a, b) => a.lastName.localeCompare(b.lastName));

// //   console.log(people);



// let year = 2025;
// let qabisa = 506;
// let boshi = year - qabisa + 1;

// let qabisa = 0;

// for (let yil = boshi; yil <= year; yil++) {
//   if ((yil % 4 === 0 && yil % 100 !== 0)) {
//     qabisa++;
//   }
// }

// let oddiy = 365
// let jami_kun = (qabisa * 366) + (oddiy * 365);

// console.log('jami kunlar'; jami_kun);


// let yil = 2025;

// let kunlarSoni;

// if (yil % 4 === 0) {
//   if (yil % 100 === 0) {
//     if (yil % 400 === 0) {
//       kunlarSoni = 366;
//     } else {
//       kunlarSoni = 365;
//     }
//   } else {
//     kunlarSoni = 366;
//   }
// } else {
//   kunlarSoni = 365;
// }

// console.log(yil + " yilda " + kunlarSoni + " kun bor.");



// let str = "OXFORD2025";

// let harflar = str.slice(0, 6);   
// let raqamlar = str.slice(6);   

// console.log( harflar);
// console.log( raqamlar);


let str = "ooxxfoorrrrddd";

let result = "";
let count = 1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        count++;
    } else {
        result += str[i] + count;
        count = 1;
    }
}

console.log(result);
