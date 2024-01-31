//db.js
const mysql = require('mysql');
const sql = require('./db/customerSql.js');
//sql.customerList.

//MySQL 연결 설정.
                    //(connerction은 개별 pool이 전체)
const connectionPool = mysql.createPool({
    //host = IP
    host:'127.0.0.1',
    port:'3306',
    user:'dev01',
    password:'1234',
    database:'dev',
    //pool을 만들 때 사용!
    connectionLimit:10,
    debug:true
})

//promise가 있으니까 일단 결과값이 올떄까지 기다리겠다.
const executeQuery = async (alias,values)=>{
    return new Promise((resolve, reject)=>{
        let executeSql = sql[alias];
        connectionPool.query(executeSql,values,(err,results)=>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                console.log(results);
                resolve(results);
            }
        })
    });
};

module.exports={
    executeQuery
}





