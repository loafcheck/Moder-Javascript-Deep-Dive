//함수 객체
//함수 선언식
function add () {

}
//익명 함수 
let add1 = function() {

}
//기명함수 표현식
let add2 = function add () {

}
//익명함수 기명함수 차이는 name propety에 add 가 있다는 차이 뿐이다. 


console.log(add);

// 1+2 이라는 표현식에서 결과 3이 나와야 하는데 
function check (x,y) {
    return x+y;
}
console.log (check);
//이렇게 결과가 undefined가 나온다면, 식이 아니라 문이다!!!

//함수 표현식
let a = function a (x,y) {
    return x + y;
}

//함수 선언식
function graph (x,y) {
    return x + y;
}

//함수 표현식과 선언식의 차이는 앞에 let a 가 있느냐 없느냐 차이 , 문 과 식의 차이

//console.dir - 객체의 데이터를 보고 싶을때

//함수 생성 시점과 함수 호이스팅/////////////////////////////

/*
//함수 참조
console.dir(add);
console.dir(sub);
//함수 호출
console.log(add(2,5));
console.log(sub(2,5));
//함수 선언문
function add (x , y) {
    return x + y;
}

//함수 표현식
let sub = function (x , y) {
    return x - y;
}
*/

//함수 호이스팅이 어떻게 될까?/////////////////////////////
/*
function add (x , y) {
    return x + y;
}
let sub 

console.dir(add);
console.dir(sub);

console.log(add(2,5));
console.log(sub(2,5));


function (x , y) {
    return x - y;
}
띠리사 add는 호이스팅이 되어서 실행이 되지만, sub는 값이 할당 되기 이전임으로 함수 표현식 부분인 값의 계산이 되지 않는다. 
함수 선언문 자체가 호이스팅 된다 .
*/

//화살표 함수 
const add3 = (x, y) => x + y;
const add4 = function (x,y) {
    x + y ;
}

/* 
add 3 와 add 4 의 객체 값이 다르다. 
화살표 함수를 사용시 생성자로 사용불가.
화살표 함수는 함수의 기능만 하도록 사용하기 
화살표 함수는 내부 동작도 간략화 되어 있다.
*/

function add7 () {
    let x = 1;
    let y =2;
    return x + y;
  
}
console.log (`This is about 함수 호출 ${add7}`);

add7 (1, 2); 

// arguments 객체 프로퍼티 - 초과된 인수는 그냥 버려지는 것이 아니다. arguments 객체 프로퍼티로 보관된다. 
// 아규먼트 객체는 함수를 정의할 때 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용된다. 
//스크린샷 확인
/*
function add (x , y) {
    console.log(arguments);
    return x + y;
}
undefined
add(1,2);
VM361:2 Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
*/

//매개변수는 순서에 의미가 있다. 갯수가 많으면 많을 수록 문제가 생긴다. 3개 이상을 넘어가는 건 권장하지 않고 객체로 만드는 것을 권장. 
//매개변수 primitive는 원시값을 전달받고, 매개 변수 obj는 객체를 전달 받는다. 
function changeVal (primitive, obj) {
    primitive += 100;
    obj.name = 'kim';
}

//외부 상태
let num = 100;
let person = {name : 'Lee'};


console.log(num); //100
console.log(person); // {name:'lee'}

//원시값은 값 자체가 복사되어 전달되고 객체는 참조값이 복사되어 전달된다. 
changeVal(num, person);

//원시값은 원본이 훼손되지 않는다. 
console.log(num);

//객체는 원본이 훼손된다. 
console.log(person);


//즉시 실행 함수 
//즉시 실행 함수는 다시 재 호출이 될 수 없다. 함수가 실행되자 마자 끝내버리는 것이기 때문!
(function foo () {
    var a = 3;
    var b = 5;
    return a * b;
})();

//즉시 실행 함수 방법 4가지
(function (){

}());

(function (){

})();
!function (){

}();
+function () {

}();

//Nested Function 중첩함수는 외부함수에서 값을 참조할 수 있다. 

function outer () {
    var x = 1;

//중첩 함수 
function inner () {
    let y = 2;
    //외부 함수의 변수를 참조 할 수 있다. 
    console.log (x + y);
}
    inner();
}
outer ();   


//콜백함수 
function repeat (n, f) {
    for (let i = 0 ; i < n ; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log (i);
};

repeat (5, logAll);

let logOdds = function (i) {
    if (i/2) console.log(i);
}

repeat(5, logOdds);
//리핏 함수한테 logOdds를 매개변수를 둠으로 콜백함수로 쓴것이다. 즉 함수를 다른 함수한테 넘겨주는 것을 콜백함수라 한다. 