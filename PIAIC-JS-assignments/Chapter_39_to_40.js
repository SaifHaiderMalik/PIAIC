var course1 = Number(prompt("Enter Course1 Marks", 80));
var course2 = Number(prompt("Enter Course2 Marks", 80));
var course3 = Number(prompt("Enter Course3 Marks", 80));
var course4 = Number(prompt("Enter Course4 Marks", 80));
var course5 = Number(prompt("Enter Course5 Marks", 80));

var totalMarks = 500;

var obtainedMarks = course1 + course2 + course3 + course4 + course5;

var percentage = obtainedMarks * 100/totalMarks;

switch (true)
{
    case percentage>= 90:
        alert("Grade A+");
        break;

        case percentage>= 75:
        alert("Grade A");
        break;
        
        case percentage>= 60:
        alert("Grade B");
        break;

        case percentage>= 45:
        alert("Grade C");
        break;

        case percentage>= 30:
        alert("Grade D");
        break;

        case percentage>= 0:
            alert("Grade F");
            break;
}
