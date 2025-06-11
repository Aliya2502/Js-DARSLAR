// 1. Fibonacci sonining n-chi hadi
// Masala: Rekursiya yordamida Fibonachchi ketma-ketligining n-chi hadini hisoblovchi funksiya yozing.

// Formula:
// fib(0) = 0
// fib(1) = 1
// fib(n) = fib(n-1) + fib(n-2) (n > 1 bo‘lganda)

// Namuna:
// fib(5) => 5  // (0, 1, 1, 2, 3, 5)

// =================================================================================================================

// 2. Sonning raqamlar yig‘indisi
// Masala: Berilgan musbat butun sonning raqamlar yig‘indisini rekursiya bilan hisoblang.

// Shart:
// Son 0 bo‘lsa, yig‘indi 0 ga teng.
// sumDigits(123) = 3 + sumDigits(12)

// Namuna:
// sumDigits(1234) => 10  // (1 + 2 + 3 + 4)

// =================================================================================================================

// 3. To‘g‘ri qavslar ketma-ketligi
// Masala: Rekursiyadan foydalanib, n juft to‘g‘ri qavslar (() yoki {} yoki []) dan tashkil topgan barcha to‘g‘ri kombinatsiyalarni generatsiya qiling.

// Shart:
// Har bir ochiluvchi qavs yopiluvchi qavs bilan to‘g‘ri juftlashgan bo‘lishi kerak.

// Namuna:
// generateParentheses(2) => ["()()", "(())"]
// generateParentheses(3) => ["()()()", "(()())", "()(())", "(())()", "((()))"]

// =================================================================================================================

// 4. Ixtiyoriy chuqurlikdagi obyektni tekis (flatten) qilish
// Masala: Rekursiya bilan ichma-ich joylashgan obyektlarni "tekis" (barcha ichki maydonlari 1 darajali) qiling.

// Shart:
// { a: 1, b: { c: 2 } } kiritilsa, { a: 1, "b.c": 2 } natija bo‘lishi kerak.

// Namuna:
// flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } })  -->  { a: 1, "b.c": 2, "b.d.e": 3 }

// =================================================================================================================

// 5. Kompaniya xodimlarining oylik maoshini hisoblash (recursion bilan)
// Masala: Kompaniyaning xodimlar tarkibi ichma-ich obyektlar ko‘rinishida berilgan. Har bir xodimning maoshi uning o‘z maoshi + boshqaradigan xodimlarining maoshlari yig‘indisiga teng. Rekursiya yordamida berilgan xodim (yoki butun kompaniya) uchun umumiy oylik maoshni hisoblang.

// Struktura:
// Har bir xodim quyidagi formatda:
// {
//   id: number,
//   name: string,
//   salary: number,  // o‘zining asosiy maoshi
//   subordinates: []  // unga qarashli xodimlar (ichma-ich obyektlar)
// }

// Namuna:
// const company = {
//   id: 1,
//   name: "CEO",
//   salary: 5000,
//   subordinates: [
//     {
//       id: 2,
//       name: "CTO",
//       salary: 4000,
//       subordinates: [
//         { id: 4, name: "Dev1", salary: 2000, subordinates: [] },
//         { id: 5, name: "Dev2", salary: 2500, subordinates: [] }
//       ]
//     },
//     {
//       id: 3,
//       name: "CFO",
//       salary: 4500,
//       subordinates: [
//         { id: 6, name: "Accountant", salary: 1800, subordinates: [] }
//       ]
//     }
//   ]
// };

// calculateTotalSalary(company) => 5000 + 4000 + 2000 + 2500 + 4500 + 1800 = 19800
