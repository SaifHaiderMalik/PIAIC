var number = prompt("Enter Number");

alert(Math.ceil(number));

var text = "this is my dummy text";

sliceText = text.slice(0,4);

var newText = [];
var j = 3;

for(i=0;i<4;i++)
{
    newText[i] = sliceText[j];
    j--;
}

alert(newText.toString().replace(/,/g,""));
