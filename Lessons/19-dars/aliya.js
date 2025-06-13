// "1-png"
// let str="Webbrain Academy";

let str = "Webbrain Academy";
let count = 0;

for (let i = 0; i < str.length; i++) {
  
  if (
    (str[i] >= 'A' && str[i] <= 'Z') || 
    (str[i] >= 'a' && str[i] <= 'z')
  ) {
    count += 1; 
  }
}

console.log("Harf soni:", count);
