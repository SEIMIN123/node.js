const express = require('express');
const app = express();

app.listen(8080, function(){

    console.log('listenin on 8080');
});

app.get('/monshop', function(요청, 응답){
    응답.send('몬스터 만물상 입니다.');

});


// --------get요청----------//

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html')

});

