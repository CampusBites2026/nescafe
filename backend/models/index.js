const Student = require("./Student");
const Teacher = require("./Teacher");
const Parent = require("./Parent");
const Attendance = require("./Attendance");
const Result = require("./Result");
const Fee = require("./Fee");
const Subject = require("./Subject");
const Assignment = require("./Assignment");
const OnlineExam = require("./OnlineExam");
const Question = require("./Question");
const School = require("./School");
const User = require("./User");

/*
|--------------------------------------------------------------------------
| School ↔ User
|--------------------------------------------------------------------------
*/

School.hasMany(User, {
  foreignKey: "schoolId",
  as: "users",
});

User.belongsTo(School, {
  foreignKey: "schoolId",
  as: "school",
});

/*
|--------------------------------------------------------------------------
| Parent ↔ Student
|--------------------------------------------------------------------------
*/

Parent.hasMany(Student, {
  foreignKey: "parentId",
});

Student.belongsTo(Parent, {
  foreignKey: "parentId",
});

/*
|--------------------------------------------------------------------------
| Student ↔ Attendance
|--------------------------------------------------------------------------
*/

Student.hasMany(Attendance, {
  foreignKey: "studentId",
});

Attendance.belongsTo(Student, {
  foreignKey: "studentId",
});

/*
|--------------------------------------------------------------------------
| Student ↔ Result
|--------------------------------------------------------------------------
*/

Student.hasMany(Result, {
  foreignKey: "studentId",
});

Result.belongsTo(Student, {
  foreignKey: "studentId",
});

/*
|--------------------------------------------------------------------------
| Student ↔ Fee
|--------------------------------------------------------------------------
*/

Student.hasMany(Fee, {
  foreignKey: "studentId",
});

Fee.belongsTo(Student, {
  foreignKey: "studentId",
});

/*
|--------------------------------------------------------------------------
| Teacher ↔ Subject
|--------------------------------------------------------------------------
*/

Teacher.hasMany(Subject, {
  foreignKey: "teacherId",
});

Subject.belongsTo(Teacher, {
  foreignKey: "teacherId",
});

/*
|--------------------------------------------------------------------------
| Subject ↔ Assignment
|--------------------------------------------------------------------------
*/

Subject.hasMany(Assignment, {
  foreignKey: "subjectId",
});

Assignment.belongsTo(Subject, {
  foreignKey: "subjectId",
});

/*
|--------------------------------------------------------------------------
| Online Exam ↔ Questions
|--------------------------------------------------------------------------
*/

OnlineExam.hasMany(Question, {
  foreignKey: "examId",
});

Question.belongsTo(OnlineExam, {
  foreignKey: "examId",
});

module.exports = {
  Student,
  Teacher,
  Parent,
  Attendance,
  Result,
  Fee,
  Subject,
  Assignment,
  OnlineExam,
  Question,
  School,
  User,
};
