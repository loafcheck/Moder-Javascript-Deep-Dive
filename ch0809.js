{
    let a = 1;
    console.log(a);
}


// 제어문
var x = 1;
if (x<10) {
    x++;
}
console.log(x);

//함수 선언문
function sum (a,b){
    return a + b;
}

//삼항연사자
var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind);

for (var i = 0 ;  i < 10 ; i++) {
    console.log(i++);
}