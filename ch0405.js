//ch04 변수
console.log("hello world");

var result = 10 + 20;
console.log(result);

//식별자: Identifier- 메모리주소를 식별할 수 있는 고유한 이름
//var let const

var score;
console.log(score);
//선언시 undefined

//변수 호이스팅: 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트의 고유의 특징을 변수 호이스팅이라 한다.

console.log("호이스팅결과:", score);
var score;
score = 90;
console.log(score);

//값의 재할당 할 수 없을 때 const
//가비지 콜렉터에 의해 메모리가 자동 해제된다. 단 메모리에서 언제 해제될지는 예측할 수 없다.

//변수-함수-카멜case-예시: firstCase
//생성자함수-클래스이름-파스칼케이스-예시:FirstCase

/////////////////

//ch05 표현식과 문

//literal: 문자그대로 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법

// let objectLiteral = {name: 'Lee', address: 'Seoul'};
// let arrayList = [1,2,3];
// let funcSample = function ()

var x = 1 + 2;
console.log(x + 3);

//변수 선언문은 표현식이 아닌 문이다. 값으로 평가될 수 없다.
//예시) var x;
//할당문은 표현식 문이다.
//예시) x = 100;
