npm init

Basic:

npm install apollo-server-express body-parser express graphql graphql-tools --save

node server.js

http://localhost:4000/graphiql

{
  hello
}

http://localhost:4000/graphql?query=%7B%0A%20%20hello%0A%7D

-----------------------------------------------------------------------------------

npm install graphql express express-graphql —save

node index.js

#1
query getSingleCourse($courseID: Int!) {
    course(id: $courseID) {
        title
        author
        description
        topic
        url
    }
}

Parameter:
{ 
    "courseID":1
}

#2
query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
      course1: course(id: $courseID1) {
             ...courseFields
      },
      course2: course(id: $courseID2) {
            ...courseFields
      } 
}
fragment courseFields on Course {
  title
  author
  description
  topic
  url
}

Parameter:
{ 
    "courseID1":1,
    "courseID2":2
}

#3

mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ... courseFields
  }
}

Parameter:
{
  "id": 1,
  "topic": "JavaScript"
}



