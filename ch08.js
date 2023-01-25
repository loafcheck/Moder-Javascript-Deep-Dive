for (var i = 1 ; i <= 6 ; i++) {
    for (var j = 1 ; j <= 6 ; j++ ) {
        if (i+j == 6) 
        console.log(`[${i},${j}]`);
    }

}

var count = 0;

// while (count < 3) {
//     console.log (count);
//     count ++;
// }

while (true) {
    console.log(count);
    count ++;
    if (count ==3) break;
}