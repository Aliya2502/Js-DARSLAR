// "1-png"
// let a=2;    natija: over 
// let b=3;

// let result = (a + b < 4) ? 'Below' : 'Over';

// console.log(  result);


// '2-png'
// let login = 'Director';     // natija": greetings

// let message = (login == 'Employee') ? 'Hello' :
//               (login == 'Director') ? 'Greetings' :
//               (login == '') ? 'No login' :
//               '';

// console.log(message);

'3-png'
let browser = 'Chrome';     // natija:Okay we support these browsers too

if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (
    browser === 'Chrome' ||
    browser === 'Firefox' ||
    browser === 'Safari' ||
    browser === 'Opera'
) {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}



'4-png'

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);  
        break;
    case 1:
        alert(1);  
        break;
    case 2:
    case 3:
        alert('2,3');  
        break;
    default:
        alert('Boshqa qiymat');  
}
