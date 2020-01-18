var firstNumber = prompt("Enter Fiirst Number");
var secondNumber = prompt("Enter Second number");
var operation = prompt("Enter Operation");

if (operation == "+")
{
    var sum = Number(firstNumber) + Number(secondNumber);
    alert(sum);
}

else if (operation == "-")
{
    var minus = Number(firstNumber) - Number(secondNumber);
    alert(minus);
}

else if (operation == "*")
{
    var mult = Number(firstNumber) * Number(secondNumber);
    alert(mult);
}

else if (operation == "/")
{
    var div = Number(firstNumber) / Number(secondNumber);
    alert(div);
}

else if (operation == "%")
{
    var mod = Number(firstNumber) % Number(secondNumber);
    alert(mod);
}

