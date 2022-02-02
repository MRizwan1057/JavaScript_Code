let age=64;
let st="working"
if(age>59){
	 if(st=="working")
	{
		console.log("Senior Worker");
	}
	else 
	{
		console.log("Retired Senior");
} 
}
if(age<59){
	if(age>20){
		console.log("Adult");
	}
	else if (age>12 && age<20)
	{
		console.log("Teen");
	}
	else
	{
		console.log("Child");
	}
}