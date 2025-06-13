


let qora_odam = [
    { id: 3, name: "bek", age: 30 },
    { id: 2, name: "ali", age: 25 },
    { id: 1, name: "xon", age: 27 },
  ];
  
  qora_odam.sort((a, b) => a.age - b.age);
  
  qora_odam.sort((a, b) => a.name.localeCompare(b.name));
  
  qora_odam.sort((a, b) => a.id - b.id);
  
  console.log( qora_odam);
  
  
  //2-savol===========================================================================================
  
  let obj = {
    id: 1,
    status:"nafaga oluvchi"
  }
  
  if (obj.status === 0) {
    console.log("0 ga tengg");
  } else if (obj.status !== 1) {
    console.log("1 ga teng emas");
  }
  
  console.log(obj)