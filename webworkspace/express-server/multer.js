const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //cb=callback
        cb(null, 'files/');
    },
    filename: function (req, file, cb) {
        let rename = (new Date()).getMilliseconds() + file.originalname;
        cb(null, rename);
    }
});

const upload = multer({ storage: storage });

const staticUrl = '/images';

app.use(staticUrl, express.static('files'));

app.post('/profile', upload.single('avatar'), (req, res) => {
    //<img scr="">
    let imgUrl = `${staticUrl}\/${req.file.filename}`;
    res.send(imgUrl);
});

app.post('/photos', upload.array('list'), (req, res) => {
    let imgUrlList = [];
    for (let file of req.files){
    let imgUrl = `${staticUrl}\/${file.filename}`;
    imgUrlList.push(imgUrl);
}
res.send(imgUrlList);
})


app.listen(4000, () => {
    console.log('Server Start : multer');
})
