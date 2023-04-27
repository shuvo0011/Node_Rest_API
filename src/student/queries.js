const getStudents = "SELECT * From student.students";
const getStudentById = "SELECT * FROM student.students WHERE id=$1";

const checkEmailExists = "Select s From student.students s where email=$1";

const addStudent = " insert into student.students (name,email,age,dob) values($1, $2, $3, $4)";

const removeStudent = " delete from student.students where id = $1";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
}