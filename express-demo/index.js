const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World!!!!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})


// app.post();
// app.delete();
// app.put();

//PORT
const portNum = 3000;
process.env.PORT || portNum;
app.listen(portNum, ()=> console.log(`Listening on port ${portNum}...`));
