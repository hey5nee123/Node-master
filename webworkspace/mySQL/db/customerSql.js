let customerList =
    `SELECT id,
            name,
            email,
            phone,
            address
 FROM       customers`;


let customerInfo =
    `SELECT id,
 name,
 email,
 phone,
 address
 FROM   customers
 WHERE  id =?`;



//등록.
let customerInsert =
    `INSERT INTO customers
     SET         ?`; //객체, 필드명 == 컬럼명.


let customerUpdateAll =
    `UPDATE customers
     SET     ?
     WHRER   id = ?`;  //배열.[객체 , 단일값 ] 객체인 이유 필드명이 따로 지정 X라서.

let customerUpdateInfo =
    `UPDATE customers
     SET     email = ?, phone = ?, address = ?
     WHERE  id = ?`;  //배열.[ 단일값, 단일값, 단일값, 단일값] > 이유:필드명이 지정되어서!

     
module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,                                                                             
    customerUpdateInfo
}

//배열인지 아닌지 구분법 : 물음표 개수.
//?별로 객체타입인지 아닌지:쿼리문에 ?가 앞에 col명을 명시하면  객체.

