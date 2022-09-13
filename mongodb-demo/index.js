const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wgmMoshApp:wgmMoshApp@mernmoshapp.bxgpy2d.mongodb.net/?retryWrites=true&w=majority');
//     .then(() => console.log('Connected to MongoDB....'))
//     // .catch(err => console.error('Could not connect to MongoDb', err));


const cousreSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', cousreSchema);

async function createCourse(){
    
    const course = new Course({
        name: 'Mosh Node.js Course',
        author: 'Garrett',
        tags: ['node', 'backend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

createCourse();  