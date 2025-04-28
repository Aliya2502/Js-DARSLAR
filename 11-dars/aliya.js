'homework'

function Calculator() {
    this.read = function () {
        this.a = +prompt('a ni kiriting:', 0);
        this.b = +prompt('b ni kiriting:', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());







//  1 - Object keylarini topish
let obj1 = {
    id: 1,
    name: "WebBrain"
};
console.log(Object.keys(obj1));

//  2 - Raqamga teng valuelar keysini topish
for (let key in obj1) {
    if (typeof obj1[key] === "number") {
        console.log(key);
    }
}

// 3 - Boolean tipidagi valuelarni chiqarish
let obj2 = {
    id: 1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false
};

let boolObj = {};
for (let key in obj2) {
    if (typeof obj2[key] === "boolean") {
        boolObj[key] = obj2[key];
    }
}
console.log(boolObj);

// 4 - Object ichidan qiymat boyicha qidirish
function Search(obj, str) {
    for (let key in obj) {
        if (obj[key] === str) {
            console.log({ [key]: obj[key] });
        }
    }
}

let obj3 = {
    id: 1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false
};

Search(obj3, "WebBrain");

//  5 - Value ichida string borligini tekshirish
function searchValue(obj, str) {
    let res = [];
    for (let key in obj) {
        if (typeof obj[key] === "string" && obj[key].includes(str)) {
            res.push(obj[key]);
        }
    }
    console.log(res.join(","));
}

let obj4 = {
    id: 1,
    name: "atirgul",
    color: "qizil",
    count: 10,
    price: "10$"
};

searchValue(obj4, 'i');

// 6 - Ichki objectlardan age yig'indisi
let person = {
    id: 1,
    name: 'Odil',
    age: 78,
    child: {
        id: 1,
        name: 'Ali',
        age: 48,
        child: {
            id: 1,
            name: 'Umar',
            age: 20
        }
    }
};

function totalAge(obj) {
    let sum = 0;
    while (obj) {
        sum += obj.age;
        obj = obj.child;
    }
    return sum;
}

console.log(totalAge(person));

//  7 - Object clone qilish
let obj5 = {
    id: 1,
    name: 'Aliya',
    job: 'developer'
};

let clone = JSON.parse(JSON.stringify(obj5));
obj5.name = "Ali";
console.log(obj5);
console.log(clone);

//  8 - Tugilgan yil va yoshni tekshirish
let obj6 = {
    id: 1,
    name: 'ALIYA',
    age: 18,
    year: 2006
};

function checkAge(obj) {
    let currentYear = new Date().getFullYear();
    if (currentYear - obj.year !== obj.age) {
        console.log('xato malumot kiritdingiz');
    } else {
        console.log('Malumotlar togri');
    }
}

checkAge(obj6);

// 9 - Ichki object borligini tekshirish
let obj = {
    id: 1,
    title: 'the best',
    address: {
        street: "Farobiy",
        number: '34'
    }
};

let bor = false;

for (let key in obj) {
    if (obj[key] !== null && typeof obj[key] === 'object') {
        bor = true;
        break;
    }
}

console.log(bor);















































// let obj = {
//     id: 1,
//     name: "Eshmat",
//     action() {
//         console.log(obj.name);
//     }
// };

// let newObj = structuredClone(obj);

// newObj.action();



//sababi obj ichida action funksiyasi bor structuredClone faqat data ni clone qiladi
