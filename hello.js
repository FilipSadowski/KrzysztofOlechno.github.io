
var myArray = new Array(9);
var skok = 1/(myArray.length-1);
for(var i = 0; i < myArray.length; ++i) 
{
myArray[i] = skok*i;
}
console.log(myArray);