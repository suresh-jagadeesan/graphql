var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const  course  = require('./domain/course/course');

var schema = course().courseSchema;

var root = {
    course: course().getCourse,
    courses: course().getCourses,
    updateCourseTopic: course().updateCourseTopic
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', (req, res, next) => {

    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'content-type, authorization, content-length, x-requested-with, accept, origin');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Allow', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
}, express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));