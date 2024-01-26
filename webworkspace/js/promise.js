console.log('Promise');

let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('비동기 작업 실행');
        //resolve,reject로 작업 성공 여부가 결정.
        resolve('작업성공');
        //resolve >then.
        //reject > catch.
    }, 1000);
});

test
    .then(data => console.log('then', data))
    .catch(err => console.log('catch', err))
    .finally(() => console.log('작업 끝!'));

// let fetch = () => {

//   return new Promise((resolve, reject) => {

//   })
// }