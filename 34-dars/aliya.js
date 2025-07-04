// 1

// class Clock {
//     showTime() {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, '0');
//       const minutes = String(now.getMinutes()).padStart(2, '0');
//       const seconds = String(now.getSeconds()).padStart(2, '0');
//       console.log(`${hours}:${minutes}:${seconds}`);
//     }
//   }
  
//   const clock = new Clock();
//   setInterval(() => clock.showTime(), 1000);
  

//   2

class Car {
    constructor(nomi) {
      this.nomi = nomi;
      this.tezlik = 0;
    }
  
    gazBos() {
      this.tezlik += 10;
    }
  
    holat() {
      console.log(`${this.nomi} hozir ${this.tezlik} km/h tezlikda`);
    }
  }
  

  class Tesla extends Car {
    constructor(nomi) {
      super(nomi);
      this.batareya = 100;
    }
  
    gazBos() {
      if (this.batareya > 0) {
        this.tezlik += 10;
        this.batareya -= 1;
      } else {
        console.log("Batareya tugagan! Iltimos, quvvatlang.");
      }
    }
  
    quvvatla() {
      this.batareya = 100;
    }
  
    holat() {
      console.log(`${this.nomi} hozir ${this.tezlik} km/h tezlikda. Batareya: ${this.batareya}%`);
    }
  }
  const malibu = new Car("Malibu");
malibu.gazBos();
malibu.gazBos();
malibu.holat(); 

const tesla = new Tesla("Tesla");
tesla.gazBos();
tesla.gazBos();
tesla.gazBos();
tesla.holat(); 

tesla.quvvatla(); 
tesla.holat(); 
 
