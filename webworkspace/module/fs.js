const fs = require('fs');
const data = 'Hello, Node.js World';

/*fs.writeFile('./sample.txt', data, 'utf-8', (err) => {
    if (err) throw err;
    console.log('job completed');
});*/

fs.readFile('./sample.txt', 'utf-8', (err, datas) => {
    if (err) throw err;
    console.log(datas);
})


const json1 = {'밥':'배고파',
'뭐해':'심심해'};

const json11 = typeof(json1);
console.log(json11);