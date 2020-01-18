var courses = [];

for (i=0;i<5;i++)
{
    courses[i] = prompt("Enter Course " + i);
}

alert(courses);

for(i=0;i<5;i++)
{
    courses[i] = prompt("course" + i , courses[i]);
}

alert(courses);