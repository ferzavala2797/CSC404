const express = require('express');
const router = express.Router();
//const MongoDB = require("mongodb");




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'myProject in Project1A' });
});

const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "usersdb";
const collectionName = "contacts";
var test = require('assert');
var col;

var usersArray = [];  // define an empty array as a placeholder
var gradesArray = [];

MongoDB.connect(dbURL, {useUnifiedTopology: true, 
                        useNewUrlParser: true, 
                        useCreateIndex: true },  
                (error, client) => {   
    if (error) throw error;
    let db = client.db(dbName); 
    col = db.collection(collectionName, {safe:false, useUnifiedTechnology: true}, (err, r)=> {
        if (err) {
            console.log("Somethign is wrong in db.collection");
        }
    } );
   
    col.find()
        .toArray((error, userData) => {
            if (error) throw error;
            usersArray = userData; // store all users in the array users[]
            console.log(userData);
        });
    console.log(`All users: ${usersArray}`);
});

//convert letter grade
function convertGrade(grade){
    for(var i = 0; i < grade.length; i++){
      switch(grade[i]){
  
        case 'A':
          grade[i] = 4.0
          break
  
        case 'A-':
          grade[i] = 3.7
          break
  
        case 'B+':
          grade[i] = 3.3
          break
  
        case 'B':
          grade[i] = 3.0
          break
  
        case 'B-':
          grade[i] = 2.7
          break
  
        case 'C+':
          grade[i] = 2.3
          break
  
        case 'C':
          grade[i] = 2.0
          break
  
        case 'C-':
          grade[i] = 1.7
          break
  
        case 'D+':
          grade[i] = 1.3
          break
  
        case 'D':
          grade[i] = 1.0
          break
  
        case 'F':
          grade[i] = 0.0
          break
      }
    }
  }

/*
var users = [
    {
        name: "John Wayne",
        grade: "male"
    },
    {
        name: "Mary Monro",
        grade: "female"
    },
    {
        name: "Charles Bronson",
        grade: "male"
    }
];
*/
router.showUsers = (req, res) => {
    
    res.render("users", {
        allUsers: usersArray, title: "Users List"
    });
};

// router.showGrades = (req, res) => {
    
//     res.render("grade", {
//         allGrades: gradesArray, title: "Grades List"
//     });
// };

router.addUsers = (req, res) => {

    console.log("in homeController addUser");

    var newUserName = req.body.name;
    console.log("name " + newUserName);
    var newUsergrade = req.body.grade;
    //var newUserGrade = req.body.grade;
    //var newUserCSC141 = req.body.CSC141; //csc141 grade
    //var newUserCSC142 = req.body.CSC142; //csc 142 grade
    //var newUserCSC240 = req.body.CSC240 ;//csc 240 grade
    //var newUserCSC241 = req.body.CSC241 ;//CSC 241 grade


    /*   Add your code for adding one user to the "users" */
    /*   collection in the usersdb database               */
    col.insertOne({name: newUserName, grade: newUsergrade}, function(err, r) {
        test.equal(null, err);
        test.equal(1, r.insertedCount);
        col.find({}).toArray( (err, userData) => {
                console.log("record found: ", userData);
                usersArray = userData;
           });
        // Finish up test
        //db.close();
    });
    
    
    usersArray.push({name: newUserName});
    res.render("users", {
        allUsers: usersArray, title: "Users List"
    });
};

/*
router.showSignUp = (req, res) => {
    
    res.render("contactForm");
};
*/
router.postSignUpForm = (req, res) => {
    console.log("in homeController postSignUpForm method");
    res.render("contactForm", {title: "Contact Us"});
};

module.exports = router;
