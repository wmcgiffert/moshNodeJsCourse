const mongoose = require('mongoose');

// Mongo filter words
/* 
eq (equal)
ne (not equal)
gt (greater than)
gte (greater or than equal to)
lt (less than)
lte (less than or equal to)
in (in)
nin (not in)


*/


mongoose.connect('mongodb+srv://wgmMoshApp:wgmMoshApp@mernmoshapp.bxgpy2d.mongodb.net/?retryWrites=true&w=majority')
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

async function createCourse(){
    const course = new Course({
        name: 'Mosh Node.js Course',
        author: 'Garrett',
        tags: ['react', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses(){
    const courses = await Course
        .find({author: 'Garrett', isPublished: true})
        .limit(3)
        .sort({name:1})
        .select({name:1, tags:1});
    console.log(courses);
}

// getCourses();
// createCourse();  