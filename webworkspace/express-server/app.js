const fs = require('fs');
const express = require('express');
const { STATUS_CODES } = require('http');
const userRouter = require('./user.js');
const app = express();
//listen = server 실행 명령어.

//미들웨어.

//-- Request Data Process
// application/json.
app.use(express.json({

    limit: '50mb'
}));

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//Error.
app.use(function (err, req, res, next) {
    console.log(err);
    //응답을 변경해주겠다.
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.errMessage
    });

})

app.get('/custmoErr', (req, res, next) => {

    next(new Error('Process Fail! Check Data!'));
})

//static.
app.use(express.static('./files'));
app.use('/public', express.static('./files'));

//500번 err.
app.get('/defaultErr', (req, res) => {
    throw new Error('기본 핸들러 동작');
})


// Data Loding.
// https://balmostory.tistory.com/33
//동기로 처리하겠다.
const jsonFile = fs.readFileSync('./db.json');
//반드시!(json을 일반 객체로 다룰려면!)
//parsing 안 하면 'ReferenceError: jsonData is not defined'라는 오류 뜬다.
const jsonData = JSON.parse(jsonFile);

const getData = (target, where) => {
    let data = jsonData[target];
    if (Array.isArray(data)) {
        let list = data;
        for (let obj of list) {
            if (obj.id == where) {
                data = obj;
            }
        }
    }
    return data;
}

app.listen(3001, () => {

    console.log('http://localhost:3001');
})

//get은 method. 경로('/') 기반 callback이 들어오는 경우. send가 동작한다.
app.get('/', (req, res) => {
    res.send('(🎀ॣ•͈з•͈ ॣ) · ₊ ˚✿𓂃 ପ₍ᐢ๑• ֊ •๑ᐢ₎ଓ ⌒☆v ⎛⎝O⏝⏝O⎛⎝ •°⎝(°`ㅁ´ °)⎠°• •°⎝(°`ㅅ´ °)⎠°• ¸◕ˇ‸ˇ◕˛ ೭੧(❛▿❛✿)੭೨💨 ⧹╲⎝⧹༼◕ ͜ﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞo.◕ ༽⧸⎠╱⧸');
})

//전체 조회.
app.get('/posts', (req, res) => {
    let data = getData('posts');
    res.send(data);
});
//단건 조회.
//:은 변수를 선언 js에서 params라고 함. > :을 사용하는 순간 해당 field에 들어감(${}가 들어가는 느낌 ㅋ)
app.get('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let data = getData('posts', postId);
    res.json(data);
});

//등록.
app.post('/posts', (req, res) => {
    let data = req.body;
    console.log('등록', data);
    res.json(data);
})


//수정.
app.put('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let data = req.body; //[0] or field명. >가능.
    console.log('수정', postId);
    res.json({ id: postId, data });
});

//삭제.
app.delete('/posts/:id', (req, res) => {
    let postId = req.params.id;
    console.log('삭제', postId);
    res.sendStatus(203);
});

//전체조회 - comments.
app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.json(data);
});

app.use('/user',userRouter);
//단건조회 - comments.
app.get('/comments/:id', (req, res) => {
    let postId = req.params.id;
    let data = getData('comments', postId);
    res.json(data);
})

//조회 -profile.
app.get('/profile', (req, res) => {
    let data = getData('profile');
    res.send(data);
});


//검색을 포함하는 경우. -> QueryString.
//list[0].id = 100&list[0].name=Hong&
app.get('/search', (req, res) => {
    let keywords = req.query;
    console.log('검색 조건 구성.', keywords);
    console.log(keywords.id);
    res.json(keywords);

})