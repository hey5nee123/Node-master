const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();


// application/x-www-form-urlencode
const defaultParser = express.urlencoded({ extended: false });

//applicaiton/json
const jsonParser = express.json();

//app.use(defaultParser)
app.use(jsonParser);

//get은 query   post body.
app.get('/search', defaultParser, (req, res) => {
    let data = req.query.keyword;
    res.send(data + ',검색 결과');
});
//.search?keyword=${value}

//defaultParser는 info가 동작될 때만 돌아감.나머지 동작은 처리 X
app.post('/info', defaultParser, (req, res) => {

    //body 쪽으로 값이 들어옴.
    let data = req.body.name;
    res.send(data.title + ',' + data.content);
});

app.post('/message', (req, res) => {
    //param은 객체형태.
    let data = req.body.param;
    res.send(data.title + ',' + data.content);
});

//info => method:post, body:name=${value};

app.listen(5000, () => {
    console.log('Server Start');
});

let sessionSetting = session({
    //암호화 할 때 사용하는 고유값.
    secret: 'sldlk$sdl@dlsdl(#&@JDK__sjjsdj!',  //하드코딩.
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        //쿠키가 삭제될 시간.
        secure: false,
        maxAge: 60000 //밀리세컨드.
    }
});

app.use(sessionSetting);
app.get('/', (req, res) => {
    res.json(req.session);
});

//요청,응답 반대로 X.
app.post('/login', (req, res) => {
    const { id, pwd } = req.body;
    if (!req.session.isLogin) {
        req.session.user = id;
        req.session.isLogin = true;
    }
    req.session.save((err)=>{
        if(err) throw err;

        //첫페이지로 돌리겠다.
        res.redirect('/');
    });
});

app.get('/logout',(req,res)=>{
    //로그아웃시 session '파.개'
    req.session.destroy();
})
