/*var name = Number(prompt("Enter Your Name"));
var day = Number(prompt("Enter Your date of birth date"));
var month = Number(prompt("Enter Your date of birth month"));
var year = Number(prompt("Enter Your date of birth Year"));

console.log("Hello " + name + " ,Good Morning, AfterNoon, Evening or night");
//console.log("your DOB is " + date + "/" + month + "/" + year);
var birthDate = new Date("August 24 1999 00:00:00"); 
console.log(birthDate);
var currentDate = new Date();

var yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
var monthDiff = currentDate.getMonth() - birthDate.getMonth();
var dayDiff = currentDate.getDate() - birthDate.getDate();
var hourDiff = currentDate.getHours() - birthDate.getHours();
var minDiff = currentDate.getMinutes() - birthDate.getMinutes();
var secDiff = currentDate.getSeconds() - birthDate.getSeconds();

console.log("you are " + yearDiff + " Years " + Math.abs(monthDiff) + " Month " + Math.abs(dayDiff) + " Days " + Math.abs(hourDiff) + " Hours " + Math.abs(minDiff) + " Minutes " + Math.abs(secDiff) + " Seconds Old");
var age = (yearDiff*365) + (monthDiff*12) + (dayDiff); 

console.log("Your Age in Days is " + age);

var nextBirthday = new Date("August 24 2020 00:00:00");

var diff = nextBirthday.getTime() - currentDate.getTime();

var D = Math.floor(diff/(1000*60*60*24));
var H = (Math.floor(diff/(1000*60*60)) - D*24); 
var M = (Math.floor(diff/(1000*60)) - D*60*24);
var S = (Math.round(diff/(1000)) - D*60*60*24);

if (diff == 0)
{
    console.log("happy Birth Day " + name + ". today is your " + yearDiff + "th Birthday");
}

else
{
    console.log("How much time left in your next birthday? " + D + " days " + H + " hours " + M + " minutes " + S + " seconds " );   
}*/

var name = prompt("Please Enter Your Name:", "Saif Haider Malik");
var cTime = new Date();
var DOB = new Date(0);
DOB.setDate(parseInt(prompt("Please Enter DOB (Date):", 24)));
DOB.setMonth(parseInt(prompt("Please Enter DOB (Month):", 8))-1);
DOB.setFullYear(parseInt(prompt("Please Enter DOB (Year):", 1999)));
//var dateDOB = prompt("Please Enter DOB (Date):", 24);
//var monthDOB = prompt("Please Enter DOB (Month):", 8);
//var yearDOB = prompt("Please Enter DOB (Year):", 1999);
var nextBirthday = new Date(0);
nextBirthday.setFullYear(cTime.getFullYear()+1);
nextBirthday.setMonth(DOB.getMonth());
nextBirthday.setDate(DOB.getDate());
var timeDiff = cTime.getTime()-DOB.getTime();
console.log(timeDiff);
var yearDiff = timeDiff/(1000*60*60*24*365);
var monthDiff = (yearDiff - Math.floor(yearDiff))*12;
var dayDiff = (monthDiff - Math.floor(monthDiff))*24;
console.log(yearDiff);
console.log(monthDiff);
console.log(dayDiff);

console.log("Hello "+name+", Good Morning, AfterNoon, Evening or Night");
console.log("Your DOB is "+DOB);
console.log("You are "+yearDiff+" Years "+(cTime.getMonth()-DOB.getMonth())+" Month "+(cTime.getMonth()-DOB.getMonth())+" Days "+" Hours "+" Minutes "+" Seconds old");