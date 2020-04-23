"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 4000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});


// displayInfo = () => {
//   return "\nWelcome to the Internship Approval System!\n\n"+
//          "This system allows you to enter the students' names and\n"+
//          "the letter grades (for the first 4 CSC classes) and will\n"+
//          "generate a partial GPA. The system will then notify you which\n"+
//          "students are above the threshold GPA (2.5)\n\n"
// }
// console.log(displayInfo())


//input = require('./gradeInput')
//qualifiedStudents = require('./qualifiedStudents')
