const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()); 


const genres = [
    {
        id:1,"genre":"horror"
    },
    {
        id:2,"genre":"action"
    },
    {
        id:3,"genre":"comedy"
    }
]

//Get
//Get all the genres
app.get('/api/genres', (req,res)=>{
    res.send(genres);
})

//Get a single genre
app.get('/api/genres/:id', (req, res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return req.status(404).send('Could not locate a genre with {0} id', req.params);

    console.log(genre);
    res.send(genre);
})

//Post routes
//Post a new genre
app.post('/api/genres', (req, res) =>{
    const { error } = validateCourse(req.body);
    if(error) return res.status(404).send('Please check the object structure.');

    const genre = {
        id: genres.length + 1,
        genre: req.body.genre
    };

    genres.push(genre);
    res.send(genres);
})

//Put routes
//Edit a single genre
app.put('/api/genres/:id', (req, res) =>{
    let genre = genres.find(g => g.id === parseInt(req.params.id));
    const id = req.params.id;
    if(!genre) return res.status(404).send(`Could not locate a genre with ${id} id`);
    
    
    const { error } = validateCourse(req.body);
    if(error) return res.status(404).send('Invalid genre object please input valid course object')

    genre.genre = req.body.genre; 
  
    res.send(genres); 
})

//Delete routs
//Delete a single genre
app.delete('/api/genres/:id', (req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre with the given ID was not found'); 
    
    const index = genres.indexOf(genre); 

    genres.splice(index,1);

    res.send(genres);
})



//private/public functions
function validateCourse(genre){
    const schema = Joi.object({
        genre: Joi.string().min(3).required()
    });
    return result = schema.validate(genre);
}

const portNum =process.env.PORT || 3000;
app.listen(portNum, ()=> console.log(`Listening on port ${portNum}.....`)); 