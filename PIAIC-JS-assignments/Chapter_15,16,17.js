var courses = [];
var course1 = prompt("Enter Course 1");
var course2 = prompt("Enter Course 2");
var course3 = prompt("Enter Course 3");
var course4 = prompt("Enter Course 4");
var course5 = prompt("Enter Course 5");

courses.push(course1 , course2, course3, course4, course5);

alert(courses);

course1 = prompt("course 1",course1);
courses.splice(0,1,course1);
course2 = prompt("course 2",course2);
courses.splice(1,2,course2);
course3 = prompt("course 3",course3);
courses.splice(2,3,course3);
course4 = prompt("course 4",course4);
courses.splice(3,4,course4);
course5 = prompt("course 5",course5);
courses.splice(4,5,course5);

alert(courses);