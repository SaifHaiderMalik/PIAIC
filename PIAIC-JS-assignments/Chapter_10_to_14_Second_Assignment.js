var course1 = Number(prompt("Enter Course1 Marks"));
var course2 = Number(prompt("Enter Course2 Marks"));
var course3 = Number(prompt("Enter Course3 Marks"));
var course4 = Number(prompt("Enter Course4 Marks"));
var course5 = Number(prompt("Enter Course5 Marks"));

var totalMarks = 500;

var percentage = (course1 + course2 + course3 + course4 + course5) *100 / totalMarks;

alert(percentage);