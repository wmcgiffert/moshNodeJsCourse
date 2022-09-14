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

// Logical Operators
/* 
    or()
    and()
*/

// Search a string
/* 
    /^____/ starts with
    /____$/ ends with
    /____$/i case insensative
    /.*____.* / contains 

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

    const pageNumber = 2;
    const pageSize = 10; 
    const courses = await Course
        .find({author: 'Garrett', isPublished: true})
        // .or({author: 'Garrett'}, {isPublished: true})
        // .and([])
        // .find({price: {$gte: 10, $lte: 20} })
        // .find({ price: {$in: [10,15,20] } })
        // .find({author: /^ Garrett/} //starts with Garrett
        // .find({author: /Garrett$/}) //Ends with Garrett
        // .find({author: /Garrett$/i}) //Ends with Garrett and is case insensative
        // .find({author: /.*Garrett.*/i}) //Contains Garrett
        // .skip((pageNumber -1) * pageSize)) 
        // .limit(pageSize)
        .sort({name:1})
        .select({name:1, tags:1});
        // .count() //gets the number of records
    console.log(courses);
}

// getCourses();
// createCourse();  