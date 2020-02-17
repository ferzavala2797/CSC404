
displayInfo = () => {
  return "Welcome to the Internship Approval System!\n\n"+
         "This system allows you to enter the students' names and\n"+
         "the letter grades (for the first 4 CSC classes) and will\n"+
         "generate a partial GPA. You will then be allowed to enter\n"+
         "a threshold GPA for approval and get a list of students whose\n"+
         "partial GPA is greater than or equal to the threshold.\n\n"
}
console.log(displayInfo())

input = require('./gradeInput')
