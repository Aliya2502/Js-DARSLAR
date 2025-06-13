"1-png"

// min (2, 5 ) == 2
// min (3, -1 ) == -1
// min (1, 1 ) == 1

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


console.log(min(2, 5));  //natija // 2
console.log(min(3, -1)); //natija // -1
console.log(min(1, 1));  //natija // 1




"2-png"

// pow (3, 2 ) =3*3 = 9
// pow (3, 3 ) =3*3*3= 27
// pow (1, 100 ) = 1*1* ...*1=1 


function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}


console.log(pow(3, 2));   //natija  // 9
console.log(pow(3, 3));   //natija  // 27
console.log(pow(1, 100)); //natija  // 1





