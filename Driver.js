//requir the readline module
const readline = require('readline-sync');

//variable declarations
let name = global.name
let grade = global.grade
let names = ['Gabe = 3.8','Andy = 2.5 ','Amy = 2.4', 'Mike = 2.43', 'George = 2.47',
            'Tyler = 2.40', 'Quincy'


]
//let names = new Array()
let grades = ['A','A','B','A', //Gabe 3.8
            'C+','B-','B-','C+', //Andy 2.5
            'C+','B-','C+','C+', //Amy 2.4
            'C+','B','C-','B-', //Mike 2.43
            'A', 'B+', 'D+', 'D+', //George 2.47
            'A', 'C+', 'D+', 'C', //Tyler 2.4
            'A', 'B', 'D', 'C-' //Quinct 2.4
                                            ]
let courses = ['CSC141','CSC142','CSC240','CSC241']
let letterGrades = ['A','A-','B+','B','B-','C+','C','C-','D+','D','F']
let anotherStudent
let averages = new Array()


//function calls to convert letter grades to decimal grades and get averages
convertGrades(grades)
averageGrades(grades)

//function to get all input
   
//function to ask if the user wants to add another student
    

console.log(`\nNames entered: ${names}`)

//function to convert letter grades
function convertGrades(grades){
  for(var i = 0; i < grades.length; i++){
    switch(grades[i]){

      case 'A':
        grades[i] = 4.0
        break

      case 'A-':
        grades[i] = 3.7
        break

      case 'B+':
        grades[i] = 3.3
        break

      case 'B':
        grades[i] = 3.0
        break

      case 'B-':
        grades[i] = 2.7
        break

      case 'C+':
        grades[i] = 2.3
        break

      case 'C':
        grades[i] = 2.0
        break

      case 'C-':
        grades[i] = 1.7
        break

      case 'D+':
        grades[i] = 1.3
        break

      case 'D':
        grades[i] = 1.0
        break

      case 'F':
        grades[i] = 0.0
        break
    }
  }
}

//function to get average of grades
function averageGrades(grades){
  var sum = 0
  var fixedAvg = 0
  for(var i = 0; i < grades.length; i++){
      sum += grades[i]
      if((i+1) % 4 == 0){
        fixedAvg = (sum/4).toFixed(1)
        averages.push(fixedAvg)
        sum = 0
      }
  }
}


//qualified students

console.log(`Students' GPAs: ${averages}`)

let gpa = averages;

//List of students names.
//let names = namelist;

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
