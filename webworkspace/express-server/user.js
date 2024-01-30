//모듈 생성.
const express = require('express');
const router = express.Router();
//  user/
router.get('/', (req, res) => {
    res.send('회원정보 조회');
})

// user/insert
router.post('/insert',(req,res)=>{
    res.send('회원등록');
})
// user/update
router.put('/update',(req,res)=>{
    res.send('회원 수정 완료');
})
// user/delete.
router.delete('/delete',(req,res)=>{
    res.send('회원 삭제 완료');
})

module.exports = router;