console.log('array.js');

//sort() : 정렬함수 - 오름차순.
//reverse() : 정렬함수 - 내림차순.

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

let points = [40, 100, 1, 5, 25, 10];
//sort는 조건 안 주면 지멋대로 한다(유니코드) > 기준 직접 결정.
points.sort();
console.log(points);


//빼보고 음수면return 하고 양수면 뒤로 보내기.
points.sort(function (a, b) {
    //오름차순.
    return a - b;
});


points.reverse(function (a, b) {
    //내림차순.
    return b - a;
});

console.log(points);

// points.reverse();
// console.log(points);

//filter : 기존 배열(기준을 통과한 것) -> 새로운 배열.
//원래 데이터를 복사한 값.(둘다(원데이터,새로운 배열(사실상 새로운 배열을 만드는게 아님!)) 같은 객체를 가르킴.)
let words = ['spray', //
    'limit', //
    'elite', //
    'exuberant', //
    'destruction', //
    'present'
]; //

//통과냐 아니냐.
let result = words.filter((value, idx) => {
    //return 데이터 타입 boolean.
    //return value.length > 6;

    return value.indexOf('a') > -1;
    //내부에 'a'가 포함된 것.
});

console.log(result);


let userList = [
    { id: 100, name: '송강' },
    { id: 200, name: '강준' },
    { id: 300, name: '영훈' },
    { id: 400, name: '석열' },
    { id: 500, name: '준표' },
    { id: 600, name: '재인' },
    { id: 700, name: '재명' }
];
let newList = userList.filter(obj => {
    return obj.name.indexOf('송') > -1;
})

console.log(userList, newList);


newList.forEach(obj => {
    obj.age = 20;
});

console.log(userList, newList);

// map() 기존배열 -기존+조작

userList = [
    { id: 100, name: '송강' },
    { id: 200, name: '강준' },
    { id: 300, name: '영훈' },
    { id: 400, name: '석열' },
    { id: 500, name: '준표' },
    { id: 600, name: '재인' },
    { id: 700, name: '재명' }
];

let newArray = userList.map(function (obj) {
    //return 타입에 제한X.
    //원 데이터의 길이는 줄이지 못함.
    return obj.id < 300 ? obj.name : null;
})

console.log(userList, newArray);

// let newnewList = newArray.filter(obj => {
//     return obj.name.indexOf('송') > -1;
// })

// console.log(newnewList);

console.clear();
newList = userList.map((obj) => {
    return {
        id: obj.id,
        name: obj.name
    };
});

console.log(userList, newList);

newList.forEach(obj => {
    obj.age = 20;
})


console.log(userList, newList);



//reduce() : 누적합계.
let nums = [50, 12, 999, 6, 100];
let sumRes = nums.reduce(function (total, value) {
    return total + value;
}, 0);

console.log(sumRes);

console.clear();

console.log(`${nums}.[0]
하...`);

