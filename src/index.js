const express = require('express');

const app = express();
const port = 4000;
app.get('/', (req,res) => {
  res.send('hello, word')
})

app.listen(port, () => {
    console.log( port + '번에서 실행이 되었습니다.1111');
});
