function currTime()
{var d= new Date();
	var h =d.getHours();
	var m = d.getMinutes();
	var t= (h+"hrs "+m+"min");
return t 

}
document.getElementById("time").innerHTML=currTime();
console.log(currTime());