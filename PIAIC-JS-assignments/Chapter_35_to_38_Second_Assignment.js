var num = Number(prompt("Enter Number",5));

var result = factor(num);

function factor(num)
{
    if(num <= 1)
    {
      return 1;
    }  

    else
    {
      return num * factor(num-1);  
    }
}

console.log("The result is " + result);
