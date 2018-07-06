const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('cool')
})

app.listen(3344, () => console.log('localhost:3344'))