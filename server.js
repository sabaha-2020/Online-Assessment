const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const swaggerJSDoc =require('swagger-jsdoc');
const swaggerUi =require('swagger-ui-express');


var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const options = {
  definition :{
    openapi: '3.0.0',
    info:{
      title:'Online Assessment Test API',
      version:'1.0.0'
    },
    servers:[
      {
        url:'http://localhost:3003/'
      }
    ],
  },
  apis: ['./app/router/questionCategoryRoutes.js', './app/router/subjectRoutes.js', './app/router/questionSetupRoutes.js',
  './app/router/questionsRoutes.js','./app/router/userRoutes.js','./app/router/userProfileRouters.js','./app/router/answerRoutes.js',
  './app/router/submitRoutes.js','./app/router/evaluationRoutes.js','./app/router/assessmentRoutes.js','./app/router/qualificationRoutes.js',
  './app/router/occupationRouter.js','./app/router/interestRoutes.js','./app/router/enquiryTypeRoutes.js','./app/router/enquiryModeRoutes.js',
  './app/router/supportTypeRoutes.js']
}

const swaggerSpec =swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))


//IMPORT ROUTES
const questionCategoryRoutes = require('./app/router/questionCategoryRoutes');
const subjectRoutes = require('./app/router/subjectRoutes');
const questionSetupRoutes  = require ('./app/router/questionSetupRoutes');
const questionRoutes = require('./app/router/questionsRoutes');
const userRoutes =require('./app/router/userRoutes');
const userProfileRouters =require('./app/router/userProfileRouters');
const answerRoutes =require('./app/router/answerRoutes');
const submitRoutes =require('./app/router/submitRoutes');
const evaluationRoutes = require('./app/router/evaluationRoutes');
const assessmentRoutes = require('./app/router/assessmentRoutes');
const qualificationRoutes = require('./app/router/qualificationRoutes');
const occupationRoutes = require('./app/router/occupationRouter');
const interestRoutes = require('./app/router/interestRoutes');
const enquiryTypeRoutes = require('./app/router/enquiryTypeRoutes');
const enquiryModeRoutes = require('./app/router/enquiryModeRoutes');
const supportTypeRoutes = require('./app/router/supportTypeRoutes');


//USE ROUTES

app.use("/qstnCategory",questionCategoryRoutes);
app.use("/subjects",subjectRoutes);
app.use("/questionSetup",questionSetupRoutes);
app.use("/Questions",questionRoutes);
app.use("/users",userRoutes);
app.use("/updatedUser",userProfileRouters);
app.use("/answers",answerRoutes);
app.use("/Submit",submitRoutes);
app.use("/evaluation",evaluationRoutes);
app.use("/assessment",assessmentRoutes);
app.use("/qualifications",qualificationRoutes);
app.use("/occupations",occupationRoutes);
app.use("/interests",interestRoutes);
app.use("/enquirytype",enquiryTypeRoutes);
app.use("/enquiryMode",enquiryModeRoutes);
app.use("/supportType",supportTypeRoutes);


// Your MongoDB connection setup goes here
const dbConfig = require('./config/databaseConfig');


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Database Connected Successfully!!");
}).catch(err => {
  console.log('Could not connect to the database', err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json({ "message": "Hello Server started" });
});

  app.listen(3003, () => {
    console.log("Server is listening on port 3003");
  }); 
