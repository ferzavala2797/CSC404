"use strict"

//require gradeInput.js file
const gradeInput = require('./gradeInput');

//List of gpa scores from students.
let gpa = gradeInput.averageScores;

//List of students names.
let names = gradeInput.nameList;

//Array for Qualified Students
let qualifiedStudents = new Array()

for(var i = 0; i < gpa.length; i++)
{
    //Parse score from string to float.
    var gpaScore = parseFloat(gpa[i]);

    //If gpa is greater than or equal to 2.5 add student name to list.
    if(gpaScore >= 2.5)
        qualifiedStudents.push(names[i]);
}

console.log("\nQualified Students:");
console.log(qualifiedStudents);
