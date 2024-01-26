// ES6. 이전.
// 재생산을 위한 객체 => 생선자함수+즉시실행함수.


//함수 이름을 대문자로 생성할 때 객체 생성해서 내부 정의 용도로 사용.

// var Person = (function () {


//     function Person(name) {
//         //객체가 가질 필드.
//         this._name = name;
//     }


//     // 객체가 가질 메소드.
//     Person.prototype.sayHi = function () {
//         console.log('Hi' + this._name);
//     }

//     //필드에 접근할 Setter, Getter.
//     Person.prototype.setName = function (name) {
//         this._name = name;
//     }

//     Person.prototype.getName = function () {
//         return this._name;
//     }
//     return Person;
// })();


// let userA = new Person('Song');
// userA.sayHi();
// userA.setName('cute');
// userA.sayHi();
// //_로 정의한 것은 숨겨진 필드다. 
// userA._name


//ES6
class Person {
    constructor(name) {
        this._name = name;
    }

    sayHi() {
        console.log('Hi new' + this._name);
    }
    // //이것은 Setter입니다. > 
    set name(name){
        this._name = name;
    }

    //Getter만 정의하면 readonly.
    get name(){
        return this._name;
    }
}

let userB = new Person('Song');
userB.sayHi();
userB.name='Kang';
console.log(userB.name);
userB.sayHi();