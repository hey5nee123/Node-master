console.log('arrow.js');

// 함수 선언식=> var 선언자.
//호출 전후 상관 없어서 파일을 따로 뺴놓거나 맨 밑에 쫙 모아서 선언.
function hello(name) {
    console.log(name);
}

function hello(msg) {
    console.log('출력' + msg);
}

// hello2(); 
//> 함수표현식 위에서 호출할 경우 호이스팅 불가 오류 발생.(호출 전 존재.)


//함수 표현식. => const 선언자.
const hello2 = function (name) {
    console.log('hello' + name);
}

//console.log(hello2);

//화살표 함수로 변환.
const hello3 = (name) => console.log('hello,' + name);

hello3('Javascript');

//화살표 함수 문법.
let msg = msg => console.log('result,' + msg);

msg = () => console.log('송강, 내꺼');


msg = (x, y) => console.log(x + y);

msg = (x, y) => {
    let result = x + y;
    console.log(result);
}

//화살표 함수와 this의 연관성.
let array = [1, 3, 5, 7];

array.forEach(function (value, idx) {
    console.log(value,this);
});

//화살표 함수의 this는 undefined
array.forEach((value,idx)=> {
    console.log(value, this);
})