
displayInfo = () => {
  return "\nWelcome to the Internship Approval System!\n\n"+
         "This system allows you to enter the students' names and\n"+
         "the letter grades (for the first 4 CSC classes) and will\n"+
         "generate a partial GPA. The system will then notify you which\n"+
         "students are above the threshold GPA (2.5)\n\n"
}
console.log(displayInfo())

input = require('./gradeInput')
qualifiedStudents = require('./qualifiedStudents')
