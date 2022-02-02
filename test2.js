/*
let a=4 , b=8 , c=a*b;
let x;
for(x=a; x<=c; x=x+a){
	if (x==b)
		console.log(x + " is LCM");
	break;
}
let y;
for(y=b; y<=c; y=y+b)
if(b==x){
	console.log(b + " is LCM");
	break;
}
 if(x<10)
	console.log("L.C.M" + " = " + x);
else 
	console.log(x + "x" + "8" + "=" + x*8);
	console.log(x + "x" + "9" +"=" + x*9);
	console.log(x + "x" + "10" + "=" + x*10);
	console.log(x + "x" + "11" + "=" + x*11);
	console.log(x + "x" + "12" + "=" + x*12);
	*/
	// all of above i have done wrong...
	
	// test#2... lcm
	
let a=20 , b=12 , c=a*b;
let x;
for(x=a; x<=c; x++)
	if(x%a==0 && x%b==0){
		console.log(x);
	break;
	}
	for(y=8; y<=12; ++y){
		if(x>10)
			
		console.log(x + "x" + y + "="  + x*y);
		
		else
		{
			console.log("The LCM is =" + x);
			break;
		}
	}