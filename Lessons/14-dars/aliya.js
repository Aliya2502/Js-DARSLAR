// homework
1
// function check(str1, str2) {
//     for (let i = 0; i < str2.length; i++) {
//       if (!str1.includes(str2[i])) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   // Misol
//   console.log(check("webbrain academy", "acsa")); // false
  
2

// function getCount(str) {
//     let result = {};
//     for (let char of str) {
//       if (char !== ' ') {
//         result[char] = (result[char] || 0) + 1;
//       }
//     }
//     return result;
//   }
  
//   // Misol
//   console.log(getCount("webbrain"));
//   // { w: 1, e: 1, b: 2, r: 1, a: 1, i: 1, n: 1 }
  

3
// function truncate(str, n) {
//     return str.slice(0, n);
//   }
  
//   // Misol
//   console.log(truncate("webbrain academy", 5)); // 'webbr'
  
4

// function getCurrency(str) {
//     return parseInt(str.replace(/\D/g, ''));
//   }
  
//   // Misol
//   console.log(getCurrency("$1200")); // 1200

5
// function separateChars(str) {
//     let result = { letter: 0, numbers: 0, char: 0 };
//     for (let char of str) {
//       if (/[a-zA-Z]/.test(char)) result.letter++;
//       else if (/[0-9]/.test(char)) result.numbers++;
//       else result.char++;
//     }
//     return result;
//   }
  
//   // Misol
//   console.log(separateChars("webbr@!n_2022"));
//   // { letter: 6, numbers: 4, char: 3 }

6
// function capitalize(str) {
//     return str.split(' ')
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(' ');
//   }
  
//   // Misol
//   console.log(capitalize("webbrain academy")); // Webbrain Academy

// 2-savol
  
// function letter(str1, str2) {
//     if (str1.length !== str2.length) return false;
  
//     for (let i = 0; i < str1.length; i++) {
//       let char = str1.charAt(i);
//       let count1 = 0;
//       let count2 = 0;
  
//       for (let j = 0; j < str1.length; j++) {
//         if (str1.charAt(j) === char) {
//           count1++;
//         }
//       }
//       for (let j = 0; j < str2.length; j++) {
//         if (str2.charAt(j) === char) {
//           count2++;
//         }
//       }
  
//       if (count1 !== count2) return false;
//     }
  
//     return true;
//   }
  
//   // Test:
//   console.log("ABC and BCA:", letter("ABC", "BCA")); // true
  
  
  