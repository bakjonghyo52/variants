const express = require('express')
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});


app.get('/pet', function(rep, res){
    res.send('펫용품을 쇼핑할 수 있는 페이지 입니다.');
});

app.get('/', function(rep, res){
    res.sendFile(__dirname + '/index.html');
});