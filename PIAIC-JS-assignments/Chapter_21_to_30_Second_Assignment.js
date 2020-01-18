var inputValue = prompt("Enter String");

var word;

for(i=0;i < inputValue.length ; i++)
{
    if(i == 0)
    {
        word = inputValue[i].toUpperCase();
    }
    else if(inputValue[i-1] == " ")
    {
        word = word + inputValue[i].toUpperCase();
    }
    else
    {
        word = word + inputValue[i].toLowerCase();
    }
}

console.log(word);