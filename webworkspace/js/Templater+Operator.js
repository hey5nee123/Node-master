console.log('Template&Operator');

let subject = 'Javascript';
let tool = 'VS code';

// let msg ='현재 수업은"'+subject+'"를 진행하고';
// console.log(msg);
// msg = '사용하는 툴은 "'+tool+'"입니다.';
// console.log(msg);

msg = `현재 수업은 "${subject}"를 진행하고 
사용하는 틀은"${tool}"입니다.`;

console.log(msg);


// Spread Operator
console.log('Spread Operator');

//배열.
let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];
let arr3 = [arr1, arr2];

//2차원 배열.
console.log(arr3);

//펼침연산자(Spread Operator)
arr3 = [...arr1, ...arr2];
//1차원 배열.
console.log(arr3);

//문자열.
let word = "Hello";
// H e l l o

console.log(word);

let alphabet = [...word];
let alphabet1 = [...word, "]"];
let alphabet2 = [...word, "]", "S"];
console.log(alphabet);

Array.isArray(arr3)
console.log(Array.isArray(arr3)); //배열인지 체크.

let user = {
    id: 100,
    name: "SongKang",
    age: 20,
    city: "Seoul"
};

console.log(user.id);
// console.log(user);

for (let field in user) {
    console.log(field, user[field]);
    //user.field 사용불가.
    //user.field =>{field : "js"} 
    // console.log(field, user[field]);
    //객체 => 배열.
    info.push(field);
}

console.log(info);

