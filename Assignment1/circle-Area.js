var ar=new Array;
ar=[7,1.5,20];
function circleArea(ar)
{
	var pi= (22/7);
	for( var i=0;i<=2;i++)
	{var area;
		area= pi*ar*ar;
 		return area;
 	}

}
for(var i=0;i<=2;i++)
{
document.getElementById(("Area"+i)).innerHTML= "Area="+circleArea(ar[i]);
}


