

var date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
let ss = date.getMilliseconds();
console.log(date);

function fulldate() {
    return `${year}-${month}-${day} ${hour}:${min}:${ss}`;
}

// console.log(year);
// console.log(month);
// console.log(day);
let realDay = fulldate();
console.log(realDay);

process.exit();

// function format(value){

// }




const timeout = setTimeout(() => {
    console.log(getDateTime());
}, 3000);

// clearTimeout(timeout);

let count = 0;
const interval = setInterval(()=>{
    console.log('count',++count);
    if(count == 5){
        clearInterval(interval);
    }
    console.log(getDateTime());
},2000);



setImmediate(()=>{
    console.log('setImmediate',getDateTime());
});
console.log('마지막 코드');