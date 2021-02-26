const express = require('express'); //nodejs 에서 다른 패키지들을 불러올때 사용됨 기본은 node_module 디렉터리
const app = express(); //app 변수에 express 함수의 변환값을 저장 --> app 이라는 변수로 Rest endpoint 생성
const port = process.env.PORT || 3000; //process.env : nodejs 에서 환경변수를 가져올 시 이용

app.get('/', (req, res) => { //restapi 의 한 종류인 GET 리퀘스트 작성 //app.post 는 post 요청임
    res.json({ //response 형태로 success:True 코드를 전송함
        success: True,
    });
});

app.listen(port, () => { //port 3000번 적용
    console.log(`server is listening at localhost:${port}`);
});