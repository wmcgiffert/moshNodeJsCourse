const mongoose = require('mongoose');



const currentDB = 'mongo-exercise';

const db = 'mongodb+srv://wgmMoshApp:wgmMoshApp@mernmoshapp.bxgpy2d.mongodb.net/' + currentDB

mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Could not connect to MongoDb', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses(){
    const courses = await Course
    .find({tags:'backend', isPublished: true})
    .sort({name:1})
    .select('name author');

    console.log(courses);
}

getCourses();