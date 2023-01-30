//객체: key & value
//인스턴스 -> 특정 클래스에 속하는 객체 

let person = {
    name: 'Rachel',
    sayHello : function () {
        console.log(this);
        console.log(`Hello! My name is ${this.name}`);
    }
}; 


console.log(person.sayHello());

//this 전역문맥: 전역 실행 맥락에서는 this는 엄격 모드 여부에 관계 없ㅇ 전역 객체를 참조합니다. 엄격모드
//this 단순호출: 엄격 모드가 아니며 this의 값이 호출에 의해 설정되지 않으므로, 기본값으로 브라우저에서는 window인 전역 객체를 참조합니다.

let foo = {
    '':'a',
}
console.log(foo);
console.log(foo['']);

//덮어쓰기 가능하다
let xee = {
    name: "kim",
    name: "Lee"
};

console.log (xee);


let circle = {
    radius: 5,
    getDiameter: function () { //메서드
        return 2 * this.radius; //this 는 circle을 가리킨다. 
    }
};

console.log (circle);
console.log (circle.getDiameter());

var student = {
    name : 'Lee'
};
//프로퍼티 동적 생성
student.age = 30;
// person 객체에 age 프로퍼티가 존재한다. 
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다. 
delete student.age;

//student 객체에 address 프로퍼티가 존재하지 않는다 .
//따라서 delete 연산자로 address프로퍼티 삭제 불가. 이때 에러 발생 안함. 
delete person.address;

console.log(student);

/*This
This depends on how the function is called. 
For a typical function, the value of this is the object 
that the function is accessed on. If the function call is in the form 
obj.f(), then this refers to obj. 

This 는 그냥 window이다. 
function 알아보는함수 () {
    console.log(this)
}
알아보는함수();
this는 그냥 위도우로 출력된다. 

윈도우가 무엇인가?
윈도우는
document.getElementById(),alert(),console.log()
이런 함수들을 보관하는 보관소. 보관소는 큰 {오브첵트}이다. 
<script>
    let x = 300;
</script>
변수를 만들경우 변수도 window라는 큰 오브젝트안에 자동적으로 생성된다. 

strict mode안에서는 this 키워드를 일반함수 안에서 불렀을 때 undefined 라는 값으로 강제 지정해준다. 

예시----
<script>
'use strict'

function 알아보는함수(){
    console.log(this) //undefined
}
알아보는 함수();
-----

object 자료형 내에 함수들이 있을 수 있다면 this 값은 '주인님'을 뜻한다. 

var 오브젝트1 = {
    data: 'Kim',
    일반함수: function () {console.log('디스알아보자')}
}
오브젝트1.일반함수();

함수를 어떻게 꺼내 쓰냐?
오브젝트1.일반함수();
그러면 콘솔창에 '디스알아보자'가 출력됨. 
오브젝트에 들어가는 함수들을 method라고 한다.
Method 안에 this를 쓰면 신기한 값이 나오는데, 바로 주인님이라는 값이다!!

var 오브젝트1 = {
    data: 'Kim',
    일반함수: function () {console.log(this)}
}
오브젝트1.일반함수();
'디스알아보자'대신 this 키워드를 출력하면 콘솔창에 {data: 'Kim', 일반함수: f} 
이렇게 출력된다. 
메소드 안에 this를 쓴다면 this method를 가지고 있는 오브젝트를 뜻한다. 
this=method 주인님 
즉, 오브젝트1.일반함수가 this와 동일한 뜻이다 .
https://codingapple.com/unit/es6-1-this-keyword-object/ 
코딩애플 참조 
*/


// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}

/* 
var score = 80;
이것의 의미는
0x000000fe -> 식별자: score, 값: 0x000000F2 (undefined)
0x000000Ae -> 식별자: score, 값: 0X00001332 (80)

score = 90
0x000000Ae -> 식별자: score, 값: 0X0000F913 (90)


0x000000fe (score)
0x000000F2 (undefined)
0X00001332 (80)
0X0000F913 (90)

0x000000fe (0x000000F2 ) 처음에 스코어 주소값이 들어가고
0x000000F2 (undefined)
0X00001332 (80)
0X0000F913 (90)

0x000000fe (0X00001332) 80을 넣어라 하면 80주소값이 들어오고
0x000000F2 (undefined)
0X00001332 (80)
0X0000F913 (90)

0x000000fe (0X0000F913) 90을 넣어라 하면 90주소값이 들어오고
0x000000F2 (undefined)
0X00001332 (80)
0X0000F913 (90)


0x000000fe (0X0000F913) 즉 스코어는 스코어라는 식별자를 참조힌다. 
0x000000F2 (undefined) 참조카운트:0 -> 가비지콜렉팅
0X00001332 (80) 참조카운트: 0 -> 가비지 콜렉팅
0X0000F913 (90) 참조카운트가 1이된다 왜냐면 스코어가 참조하고 있으닌깐.



*/