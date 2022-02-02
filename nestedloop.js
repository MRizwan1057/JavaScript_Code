// for nested loop
/*
let x;
for(x=0; x<10; x++)
{
	for(let y=0; y<5; y++)
	{
		console.log(x, y);
	}
}
console.log("test");


for(x=0; x<5; x++)
{
	for(let y=0; y<10; y++)
	{
		if(x==2 || x==4)
			console.log(x, y);
	}
}
console.log("test");
 */
 // while nested loop
 
 /*
 let prompt=require("prompt-sync")();
 
 let x=0;
 let end1 = prompt("enter outer:");
 let end2=prompt("enter inner:");
 
 while(x<end1)
 {
	let y=0;

	 while(y<end2){
		 console.log(x,y);
	 y++;}
	x++;	 
 }
 */
 
 let N , T ;
let prompt=require("prompt-sync")();
N=prompt("Enter N :"); 
 for(let x=1; x<=N; x++)
 {
	 T=prompt("Enter T :");
 for (y=1; y<=5; y++)
 {
	 console.log(T,"X", y, "=", T*y);
 }
 }
 