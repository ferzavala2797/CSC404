//requir the readline module
const readline = require('readline-sync');

//variable declarations
let name = global.name
let grade = global.grade
let names = new Array()
let grades = new Array()
let courses = ['CSC141','CSC142','CSC240','CSC241']
let letterGrades = ['A','A-','B+','B','B-','C+','C','C-','D+','D','F']
let anotherStudent
let averages = new Array()


//do-while loop to get all input
do{
  getInput()
  doAnother()
}while(anotherStudent == 'y')

//function calls to convert letter grades to decimal grades and get averages
convertGrades(grades)
averageGrades(grades)

//function to get all input
function getInput(){

    name = readline.question("Enter students name: ")
    names.push(name)

    grade = 'A';

    for (var i = 0; i < 4; i++) {
      (function getGrades(){
        if(letterGrades.indexOf(grade) > -1){
          grade = readline.question(`Enter ${name}'s grade for ${courses[i]}:` )
          grade = grade.toUpperCase()
          if(i == 3){
            if(letterGrades.indexOf(grade) == -1){
              grade = 'A'
              grades.pop()
              console.log('Invalid input, try again.')
              getGrades()
            }
          }
          grades.push(grade)
        }else{
          i--
          grade = 'A'
          grades.pop()
          console.log('Invalid input, try again.')
          getGrades()
        }
      })()
    }
}

//function to ask if the user wants to add another student
function doAnother(){
          anotherStudent = readline.question("Would you like to add another student?(y/Y): ")
          anotherStudent = anotherStudent.toLowerCase()
          return anotherStudent
}

console.log(names)

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

console.log(grades)

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

console.log(averages)
