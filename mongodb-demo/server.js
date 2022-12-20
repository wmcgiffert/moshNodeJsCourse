const mongoose = require('mongoose');



const currentDB = 'mongo-exercise';

const db = 'mongodb+srv://wgmMosh:ABGMfurman02@cluster0.m8lgd0h.mongodb.net/test' + currentDB

mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Could not connect to MongoDb', err));

const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

// async function getCourses(){
//     const courses = await Course
//     .find({tags:'backend', isPublished: true})
//     .sort({name:1})
//     .select('name author');

//     console.log(courses);
// }
// async function getCourses(){
//     const courses = await Course
//     .find({tags:{$in:['frontend','backend']}, isPublished: true})
//     .sort({price:-1})
//     .select('name author price');

//     console.log(courses);
// }

async function getCourses(){
    return await Course
    .find({isPublished: true})
    .or([
        {price:{$gte: 15}},
        {name: /.*by*./i}
    ])
    .sort('-price')
    .select('name author price')
}

async function createCourse(){
    const course = new Course({
        author: 'Garrett',
        tags:['Node.js','Backend'],
        isPublished:false
    });
    const result = await course.save();
    console.log(result);
}

async function run(){
    const courses = await createCourse();
    // const courses = await getCourses();
    console.log(courses);   
}
run();