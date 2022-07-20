const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()); 


const genres = [
    {id:1,"genre":"horror"},
    {id:2,"genre":"action"},
    {id:3,"genre":"comdey"}
]

//Get
app.get('/api/genres', (req,res)=>{
    res.send(genres);
})

app.get('/api/genres/:id', (req, res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return req.status(404).send('Could not locate a genre with {0} id', req.params);

    console.log(genre);
    res.send(genre);
})

app.post('/api/genres', (req, res) =>{
    const { error } =validateCourse(req.body);
    if(error) return res.status(404).send()

    const genre = {
        id: genres.length + 1,
        genre: req.body.genre
    };

    genres.push(genre);
    res.send(genres);
})

app.put('/api/genres/:id', (req, res) =>{

})

app.delete('/api/genres/:id', (req,res)=>{

})


function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return result = schema.validate(course);
}

const portNum =process.env.PORT || 3000;
app.listen(portNum, ()=> console.log(`Listening on port ${portNum}.....`));