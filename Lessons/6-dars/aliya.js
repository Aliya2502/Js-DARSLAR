// for (let i = 1; i <= 9; i++) {

//     for (let j = 1; j <= 9; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   }

'1-png'

1// for (let i=0; i<5; i++)  console.log(i); natija// 2 tasiham 1 2 3 4

2// for (let i=0; i<5; ++i)  console.log(i);

'2-png' // let a;

// for (; ;) {
//     a = prompt(" 100 dan katta son kiriting");
//     if (a <= 100) continue:
//   else if (a > 100 || null)
//         break;

// }
// alert(" raqam togri kiritildi.");


'3-png'

let n = 20;

for (let i = 2; i <= n; i++) {
  let tub = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      tub = false;
      break;
    }
  }

  if (tub) {
    console.log(i);
  }
}


