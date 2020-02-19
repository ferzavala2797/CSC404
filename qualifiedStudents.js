"use strict"

const gradeInput = require('./gradeInput');
let gpa = gradeInput.averageScores;
let names = gradeInput.nameList;

let qualifiedStudents = new Array()

for(var i = 0; i < gpa.length; i++)
{
    var gpaScore = parseFloat(gpa[i]);
    if(gpaScore >= 2.5)
        qualifiedStudents.push(names[i]);
}

console.log("\nQualified Students:");
console.log(qualifiedStudents);
