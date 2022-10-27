const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const questionAnswer = require('./data/questionAndAnswers.json');

app.get('/', (req, res) => {
    res.send('api is running by joy')
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course.id === id);
    res.send(courseDetails)
});

app.get('/blog', (req, res) => {
    res.send(questionAnswer);
});


app.listen(port, () => {
    console.log(`server is runngin on port: ${port}`);
})

