const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World!!!!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4]);
})


// app.post();
// app.delete();
// app.put();
app.listen(3000, ()=> console.log('Listening on port 3000'));
