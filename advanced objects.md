Mulk bayroqlari va tavsiflovchilari
Ma'lumki, ob'ektlar xususiyatlarni saqlashi mumkin.

Hozirgacha mulk biz uchun oddiy “kalit-qiymat” juftligi edi. Lekin ob'ekt xususiyati aslida yanada moslashuvchan va kuchli narsadir.

Ushbu bobda biz qo'shimcha konfiguratsiya opsiyalarini o'rganamiz va keyingisida ularni qanday qilib ko'rinmas holda getter/setter funksiyalariga aylantirishni ko'rib chiqamiz.

Mulk bayroqlari
Ob'ekt xususiyatlari, dan tashqari value, uchta maxsus atributga ega ("bayroqlar" deb ataladi):

writable– agar boʻlsa true, qiymat oʻzgartirilishi mumkin, aks holda u faqat oʻqish uchun moʻljallangan.
enumerable– agar true, keyin tsikllar ro‘yxatiga kiritilgan, aks holda ro‘yxatga kiritilmagan.
configurable– agar boʻlsa true, xususiyat oʻchirilishi va bu atributlar oʻzgartirilishi mumkin, aks holda emas.
Biz ularni hali ko'rmadik, chunki ular odatda ko'rinmaydi. Biz "odatiy usul" mulkini yaratganimizda, ularning barchasi true. Ammo biz ularni istalgan vaqtda o'zgartirishimiz mumkin.

Birinchidan, bu bayroqlarni qanday olish kerakligini ko'rib chiqaylik.

Object.getOwnPropertyDescriptor usuli xususiyat haqida to'liq ma'lumotni so'rash imkonini beradi .

Sintaksis bu:

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
obj
Ma'lumot olish uchun ob'ekt.
propertyName
Mulk nomi.
Qaytarilgan qiymat "xususiyat deskriptori" deb ataladigan ob'ektdir: u qiymat va barcha bayroqlarni o'z ichiga oladi.

Masalan; misol uchun:

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
Bayroqlarni o'zgartirish uchun Object.defineProperty dan foydalanishimiz mumkin .

Sintaksis bu:

Object.defineProperty(obj, propertyName, descriptor)
obj,propertyName
Deskriptorni qo'llash uchun ob'ekt va uning xususiyati.
descriptor
Qo'llash uchun xususiyat deskriptor ob'ekti.
Agar mulk mavjud bo'lsa, definePropertyuning bayroqlarini yangilaydi. Aks holda, u berilgan qiymat va bayroqlar bilan xususiyatni yaratadi; u holda, agar bayroq taqdim etilmasa, u qabul qilinadi false.

Misol uchun, bu erda barcha noto'g'ri bayroqlar bilan xususiyat nameyaratilgan:

let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
Uni yuqoridagi "odatda yaratilgan" bilan solishtiring user.name: endi barcha bayroqlar soxta. Agar biz xohlagan narsa bu bo'lmasa, biz ularni o'rnatganimiz truema'qul descriptor.

Endi bayroqlarning ta'sirini misol orqali ko'rib chiqamiz.

Yozish mumkin emas
Bayroqni user.nameo'zgartirib, yozilmaydigan (qayta tayinlash mumkin emas) qilaylik :writable

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
Endi hech kim bizning foydalanuvchi nomini o'zgartira olmaydi, agar ular definePropertybiznikini bekor qilish uchun o'z nomini qo'llamasalar.

Xatolar faqat qattiq rejimda paydo bo'ladi
Qattiq bo'lmagan rejimda yozilmaydigan xususiyatlarga va shunga o'xshashlarga yozishda hech qanday xatolik yuzaga kelmaydi. Ammo operatsiya hali ham muvaffaqiyatli bo'lmaydi. Bayroqni buzuvchi harakatlar qat'iy bo'lmaganda jimgina e'tiborga olinmaydi.

Mana bir xil misol, lekin mulk noldan yaratilgan:

let user = { };

Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

alert(user.name); // John
user.name = "Pete"; // Error
Sanoqsiz
Endi odat qo'shamiz toString.user

Odatda, ob'ektlar uchun o'rnatilgan raqam toStringsanab bo'lmaydi, u ichida ko'rinmaydi for..in. Ammo agar biz o'zimiznikini qo'shsak , sukut bo'yicha u quyidagicha toStringko'rinadi :for..in

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString
Agar bizga yoqmasa, sozlashimiz mumkin enumerable:false. Keyin u for..inxuddi o'rnatilgani kabi tsiklda ko'rinmaydi :

let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// Now our toString disappears:
for (let key in user) alert(key); // name
Quyidagilardan sanab bo'lmaydigan xususiyatlar ham bundan mustasno Object.keys:

alert(Object.keys(user)); // name
Sozlab bo'lmaydigan
Sozlab bo'lmaydigan bayroq ( configurable:false) ba'zan o'rnatilgan ob'ektlar va xususiyatlar uchun oldindan o'rnatiladi.

Sozlab bo‘lmaydigan xususiyatni o‘chirib bo‘lmaydi, uning atributlarini o‘zgartirib bo‘lmaydi.

Masalan, Math.PIyozilmaydi, sanab bo'lmaydi va sozlanmaydi:

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
Shunday qilib, dasturchi qiymatini o'zgartira olmaydi Math.PIyoki uning ustiga yoza olmaydi.

Math.PI = 3; // Error, because it has writable: false

// delete Math.PI won't work either
Math.PIShuningdek, biz yana bo'la olmaymiz writable:

// Error, because of configurable: false
Object.defineProperty(Math, "PI", { writable: true });
Biz bilan hech narsa qila olmaymiz Math.PI.

Mulkni sozlanmaydigan qilib qo'yish bir tomonlama yo'ldir. bilan uni qaytarib o'zgartira olmaymiz defineProperty.

Iltimos, diqqat qiling: configurable: falsemulk bayroqlarini o'zgartirish va o'chirishni oldini oladi, shu bilan birga uning qiymatini o'zgartirishga imkon beradi.

Buni user.namesozlash mumkin emas, lekin biz uni hali ham o'zgartirishimiz mumkin (u yozilishi mumkin):

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  configurable: false
});

user.name = "Pete"; // works fine
delete user.name; // Error
Va bu erda biz user.namexuddi o'rnatilgan kabi "abadiy muhrlangan" doimiyni qilamiz Math.PI:

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false,
  configurable: false
});

// won't be able to change user.name or its flags
// all this won't work:
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });
Mumkin bo'lgan yagona atribut o'zgarishi: yoziladigan rost → noto'g'ri
Bayroqlarni o'zgartirishda kichik istisno mavjud.

Biz sozlanmaydigan xususiyatga o'zgartirishimiz mumkin, shuning uchun uning qiymatini o'zgartirishni oldini olamiz (boshqa himoya qatlamini qo'shish uchun) writable: true. falseAksincha emas.

Object.defineProperties
Bir vaqtning o'zida bir nechta xususiyatlarni aniqlash imkonini beruvchi Object.defineProperties (obj, deskriptorlar) usuli mavjud .

Sintaksis bu:

Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
Masalan; misol uchun:

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
Shunday qilib, biz bir vaqtning o'zida ko'plab xususiyatlarni o'rnatishimiz mumkin.

Object.getOwnPropertyDescriptors
Barcha xususiyat identifikatorlarini bir vaqtning o'zida olish uchun biz Object.getOwnPropertyDescriptors(obj) usulidan foydalanishimiz mumkin .

U bilan birgalikda Object.definePropertiesob'ektni klonlashning "bayroqlardan xabardor" usuli sifatida foydalanish mumkin:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
Odatda ob'ektni klonlashda biz xususiyatlarni nusxalash uchun topshiriqdan foydalanamiz, masalan:

for (let key in user) {
  clone[key] = user[key]
}
…Ammo bu bayroqlarni nusxalamaydi. Shunday qilib, agar biz "yaxshiroq" klonni xohlasak, Object.definePropertiesafzallik beriladi.

Yana bir farq shundaki, for..inramziy va sanab bo'lmaydigan xususiyatlarni e'tiborsiz qoldiradi, lekin barcha xususiyat identifikatorlarini, shu jumladan ramziy va sanab bo'lmaydiganlarni Object.getOwnPropertyDescriptorsqaytaradi .

Ob'ektni global miqyosda muhrlash
Xususiyat deskriptorlari individual xususiyatlar darajasida ishlaydi.

Butun ob'ektga kirishni cheklaydigan usullar ham mavjud :

Object.preventExtensions(obj)
Ob'ektga yangi xususiyatlar qo'shishni taqiqlaydi.
Object.seal(obj)
Xususiyatlarni qo'shish/o'chirishni taqiqlaydi. configurable: falseBarcha mavjud xususiyatlar uchun to'plamlar .
Object.freeze(obj)
Xususiyatlarni qo'shish/o'chirish/o'zgartirishni taqiqlaydi. configurable: false, writable: falseBarcha mavjud xususiyatlar uchun to'plamlar .
Shuningdek, ular uchun testlar mavjud:

Object.isExtensible(obj)
falseXususiyatlarni qo'shish taqiqlangan bo'lsa, qaytariladi , aks holda true.
Object.isSealed(obj)
trueXususiyatlarni qo'shish/o'chirish taqiqlangan bo'lsa va barcha mavjud xususiyatlar mavjud bo'lsa, qaytariladi configurable: false.
Object.isFrozen(obj)
trueXususiyatlarni qo'shish/o'chirish/o'zgartirish taqiqlangan bo'lsa va barcha joriy xususiyatlar bo'lsa, qaytariladi configurable: false, writable: false.
Amalda bu usullar kamdan-kam qo'llaniladi.
