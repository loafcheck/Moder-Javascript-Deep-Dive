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
    getDiameter: function () {
        return 2 * this.radius;
    }
};

console.log (circle);
console.log (circle.getDiameter());

