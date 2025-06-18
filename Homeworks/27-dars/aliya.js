// let obj= {
//     name:"Algoritm",
//     age:20,
//     child:{
//         name:"Oxford",
//         age:10,
//     }
// }


// Object.getOwnPropertyDescriptor(obj, {writable:false}, {})
// let a=Newobj 

// Object.defineProperty(obj, {co})



// function test() {
//   console.log(this); 
// }
// test();

// function test() {
//     console.log(this);
//   }
//   test();


// let obj = {
//     name: "Aliya",
// bbs: () => {
//       console.log(this);
//     }
//   };
//   obj.bbs();


//====================================================//
//  ddoc 
// let obj = { name: "Aliya" };
// let desc = Object.getOwnPropertyDescriptor(obj, "name");

// console.log(desc);
// {
//     value: 'Aliya'
//         writable: false;
//     enumerable: true;
//     configurable: true;
// }

// let obj = {name: "Aliya", age: 21};
// console.log(Object.getOwnPropertyDescriptors(obj));

// let obj = {};
// let a=Object.defineProperty(obj, "id", {
//   value: 123,
//   writable: false,
//   enumerable: false,
//   configurable: false
// });

// console.log(a);

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  alert( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */
