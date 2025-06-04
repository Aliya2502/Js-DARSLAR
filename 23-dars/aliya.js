// 1-savol
let a = [1, 2, 3, 4, 5];
let b = [2, 4];
let natija = [];

for (let i = 0; i < a.length; i++) {

  if (!b.includes(a[i])) {
    natija.push(a[i]);
  }
}

console.log(natija); 

// 2-savol
function toq(arr) {
   
    let toqlar = arr.filter(x => x % 2 !== 0).sort((a, b) => a - b);
    let index = 0;
  
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        arr[i] = toqlar[index];
        index++;
      }
    }
  
    return arr;
  }
  
  console.log(toq([5, 8, 6, 3, 4])); 
  



  

// 4-savol
  function yagonaSonlar(arr) {
    let natija = [];
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
     
      if (arr.indexOf(element) === arr.lastIndexOf(element)) {
        natija.push(element);
      }
    }
  
    return natija;
  }
  
  console.log(yagonaSonlar([1, 1, 2, 3, 4, 4, 5, 6, 6])); 

  
