/*
let start=2 , end=100, x, sum=0;
for(x=start; x<=end; x+=3){
	console.log(x);
	if(x%5==0){
		sum+=x;
	}
}
console.log("sum :", sum);
*/
/*
let prompt=require("prompt-sync")();
let color=prompt("please enter color code : ");
if(color==1 || color==2){
	console.log("Red");
	}
else if(color==3 || color==4){
	console.log("Green");
}
else if(color==5 || color==6){
	console.log("Blue");
	}

else if(color==0){
	console.log("Black");
	}
else if(color<0){
	console.log("Error");
	}
else 
	console.log("White");
	*/
// 3


let prompt=require("prompt-sync")();
let color;
for(let i=1; i<=10; i++){
	color=prompt("please enter color code : ");
if(color==1 || color==2){
	console.log("Red");
	}
else if(color==3 || color==4){
	console.log("Green");
}
else if(color==5 || color==6){
	console.log("Blue");
	}

else if(color==0){
	console.log("Black");
	}
else if(color<0){
	{
	console.log("No More Inputs");
break;}
	}
else 
	console.log("White");
}