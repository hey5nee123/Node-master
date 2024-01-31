const express = require('express');
const app = express();
const mysql = require('./db.js');

//mysql.executeQuery();
//미들웨어 명령어 =>use.
//application/json.
app.use(express.json());

//application/x-www-form-urlencoded

//app.use(function (req,res,next) {  });
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server Start , http://localhost:3000');
});


/*app.get('/customers', (req, res) => {
    // 1. 데이터베이스에서 'customerList' 쿼리 실행
    let list = mysql.executeQuery('customerList');

    // 2. 결과를 JSON 형식으로 응답
    res.json(list);
});*/

app.get('/customers', async (req, res) => {
    // 1. 데이터베이스에서 'customerList' 쿼리 실행
    let list = await mysql.executeQuery('customerList');

    // 2. 결과를 JSON 형식으로 응답
    res.json(list);
});

//단건 조회.
app.get('/customers/:id', async (req, res) => {
    let customerId = req.params.id;
    //SELECT 쿼리와 같이 결과를 반환하는 SQL 문장을 실행할 때 사용
    //let info = await( mysql.executeQuery('customerInfo',customerId));
    let info = await mysql.executeQuery('customerInfo', customerId);
    info = info[0];
    res.json(info);
})
//등록 customerInsert.
app.post('/customers', async (req, res) => {
    let data = req.body.param; //param = 객체.
    let result = await mysql.executeQuery('customerInsert', data);
    res.json(result);
})

//수정 customerUpdateAll
app.put('/customers/:id', async (req, res) => {
    let result = await updateAll(req);
    res.json(result);
});

//공통 기능 빼기 위해서 함수 사용.
async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.id];    //[ , ] set절,id컬럼.
    let result = await mysql.executeQuery('customerUpdate', data);
    return result;
}

//
function selectedInfo(obj) {

    let delData = ["id", "email"];

    let newObj = {};

    let isTargeted = null;

    for (let field in obj) {  //field :id,email,name, phone,address
        isTargeted = false;
        for (let target of delData) {
            if (field == target) {
                isTargeted = true;
                break;
            }
        }
        if (!isTargeted) {
            newObj[field] = obj[field];
        }
    }
    return newObj;
};


/*async function customerUpdateInfo(request) {
    let data = [, , , request.params.id];
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}*/

function getInfo(obj) {
    //순서는 상관 X.
    let getData = ["email", "phone", "address"];
    let newAry = [];
    for (let target of getData) {
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field])
                break;
            }
        }
    }
    return newAry; // ["ㅇㅇㄹㅇ@naver.com" , "010-2392-2392",null]
};

/*async function updateInfo(obj) {
    let data = [...getInfo(request.body.param), request.param.id];
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}*/

async function updateInfo(obj) {
    let data = [...getInfo(obj), obj.id];
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}



