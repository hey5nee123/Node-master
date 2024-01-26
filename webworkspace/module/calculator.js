const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}
function minus(num1, num2) {
    return num1 - num2;
}
function multi(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}


//반드시 마지막에 해줘야 함
//module.exports
//특정 이름 정하지 않고 돌려주겠다.(권한을 import에서 넘겨주겠다.)

//default로 많이 쓴다!(관례(편의))
export default {

    defNum: defaultNum,
    add,    //이름이 add(밖에서 사용할 이름.) : 함수 그 자체.
    minus,  // "minus" : minus 
    multi,
    divide
}