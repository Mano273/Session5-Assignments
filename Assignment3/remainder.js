function remainder(x,y)
{
	var x;
	var y;
	y= x%y;
	return y;
}
document.getElementById("remainder").innerHTML= ("remainder of 15 divided by 9 is :" +remainder(15,9));