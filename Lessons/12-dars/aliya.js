// 1-savol

// let user = {
//     id: 1,
//     firstName: "Eshmat",
//     surName: "Toshmatov",
//     age: 30,
//     getFullName: () => {
//         return `${this.firstName} ${this.surName}`;
//     },
// };
// console.log(user.getFullName());
// // undefined undefined chiqadi
// // Chunki (=>) da this o‘zgarmaydi, global kontekstni ko‘rsatadi, user obyekti emas

// 2-savol
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     },
// };

// ladder.up().up().down().showStep();
// // 1 chiqadi
// // Har bir metod o‘zini qaytaradi, shuning uchun ketma ket qilib chaqirish mumkin
























// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 40,
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         subChild: {
//             id: 3,
//             name: "Gulmat",
//             age: 20,
//         },
//     },
// };



