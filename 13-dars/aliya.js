// "1-png"
// 1-savol


// // function ikkilikdaSanash(son) {
// //     let ikkilik = son.toString(2); // sonni ikkilikga o‘tkazish
// //     let birlar = 0;
// //     let nollar = 0;

// //     for (let i = 0; i < ikkilik.length; i++) {
// //         if (ikkilik[i] === '1') {
// //             birlar++;
// //         } else if (ikkilik[i] === '0') {
// //             nollar++;
// //         }
// //     }

// //     console.log(`${son} ning ikkilik ko‘rinishi: ${ikkilik}`);
// //     console.log(`${birlar} ta 1, ${nollar} ta 0 bor`);
// // }

// // ikkilikdaSanash(5); // natija: 101 => 2 ta 1, 1 ta 0


// "2-savol"
// function ayirmaTop(sonlar) {
//     let engKatta = Math.max(...sonlar);
//     let engKichik = Math.min(...sonlar);
//     let ayirma = Math.abs(engKatta - engKichik); // musbat farq
//     console.log(`Eng katta: ${engKatta}, Eng kichik: ${engKichik}`);
//     console.log(`Farq: ${ayirma}`);
// }

// ayirmaTop([3, 10, 5, 1]); // natija: Farq: 9


// "3-savol"
// let son = -4.8;

// console.log(Math.trunc(son));  // -4 => faqat butun qismini oladi
// console.log(Math.floor(son));  // -5 => pastga qarab yaxlitlaydi
// console.log(Math.ceil(son));   // -4 => yuqoriga qarab yaxlitlaydi
// console.log(parseInt(son));    // -4 => satrdan butun sonni oladi

// "4-savol"

// function randomRaqam(min, max) {
//     let raqam = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(`${min} dan ${max} gacha: ${raqam}`);
//     return raqam;
// }


// randomRaqam(1, 50);
