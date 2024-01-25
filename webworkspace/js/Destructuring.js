console.log('Destructuring');

//Object.

function getUserInfo() {
    return {
        firstName: 'kang',
        lastName: 'song',
        age: 27,
        email: 'john@gmail.com',
        city: 'New York',
        country: 'USA',
        info: function () {
            return 'My Name is' + this.lastName
        }
    };
}


//변수 선언(함수 바인딩).
let user = getUserInfo();
// console.log(getUserInfo());
// console.log(user);

//내가 만든 함수처럼 사용.
let { firstName, lastName,info } = getUserInfo();
console.log(firstName, lastName);

console.log(user.info());

//Array.
let ary = [1, 2, 3];

let [x, y, z] = ary;

console.log(x, y, z);

let [a, b] = ary;
console.log(a, b);

let [e, f, g, h] = ary;
console.log(e, f, g, h);

//firstName,lastName 빼고는 gabage collection으로 넘어감.