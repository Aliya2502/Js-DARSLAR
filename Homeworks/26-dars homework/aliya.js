// "1"
// function salomBer() {
//     console.log(`Salom, mening ismim ${this.ism}`);
//   }
  
//   let odam1 = { ism: "Aliya" };
//   let odam2 = { ism: "Jasmina" };
  
//   salomBer.call(odam1); 
//   salomBer.call(odam2); 
  

// "2"
// function self() {
//     console.log("Ismim " + this.name + ", yoshim " + this.age);
//   }
  
//   let odam = {
//     name: "Aliya",
//     age: 18
//   };
  
//   self.apply(odam); 
  

// "3"
// let user = {
//     ism: "Aliya",
//   };
  
//   function salom() {
//     console.log("Salom, " + this.ism);
//   }
  
//   let yangiFunksiya = salom.bind(user);
//   yangiFunksiya(); 


// "4"
// function qosh() {
//     console.log(this.a + this.b);
//   }
//   let sonlar = {
//     a: 5,
//     b: 7
//   };
  
//   qosh.apply(sonlar); 
    
  
// "5"
// function qoshish() {
//     console.log(this.a * this.b);
//   }
  
//   let sonlar = {
//     a: 5,
//     b: 3
//   };
  
//   qoshish.call(sonlar); 
  