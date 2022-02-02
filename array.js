// Array
/*
let team=["imran", "afridi", "malik", "aamir"];
let score=[66, 55, 100, 67];
console.log(team[1]);
console.log(score);
team[6]="razaq";
score[6]=105;
console.log(team[6]);
console.log(score[6]);
let sum=0;
for(let i in score)
{
	sum+=score[i];
	console.log(score);
}
	console.log(sum/score.length);
	*/
/*
 let array=[100, 32, 42, 50, 70, 23];
 let sum=0;
 let tempt=array[0]; // biggest value finding
 for(let i in array)
 {
	 if(array[i]>tempt) // for minimum value just change > to < signs.
	 {
		 tempt=array[i];
		 console.log(tempt);
	 }
	
	 sum+=array[i];
	if(array[i] % 2 ==0)
		console.log(array[i]);
 }
 console.log(sum);
 console.log(sum/array.length);

*/





// assignment#1

/*
let dig=[0,1,2,3,4,5,6,7,8,9];
let prompt=require("prompt-sync")();
let input=prompt("enter number");
let sum=0, j, i, k;
let min=dig[0],max=dig[0];

for(let j of dig)
{
	if(dig[j]>max)
		max=dig[j];
	
	if(dig[j]<min)
		min=dig[j];

}
if(input==1)
{
for(let i of dig)	
	{
		sum+=i;
	}
	console.log(sum);
}
else if(input==2)
{
	console.log(max,min);
}
else if(input==3)
{
	for(k=dig.length-1; k>=0; k--)
		console.log(k);
}
else
{
	console.log(input);
	console.log("invalid input");
}
*/

// assignment#2

/*
numbers=[-2,-3,-4,5,6,0,0,7,8,2];
let pos=0, neg=0, zero=0;
for(let i in numbers){
	if(numbers[i]<0)
	{

		neg++;
	}
	else if(numbers[i]>0)
			pos++;
	
	else 
				zero++;
	
}
console.log(neg, zero, pos);
*/

//assignment#3
/*
prime=[2,3,4,5,6,7,8,9,11,13];
for(let p of prime)
{
	if(p%prime[p]!=0)
		console.log(p);
}*/







/*
let pm;
prime=[2,3,4,5,6,7,8,9,11,13];
for(let p of prime)
{
	for(let q of prime)
	{
		if(q%prime!=0)
		pm=q;
	}
}console.log(prime[p][q]);

*/





/* 
//assignment#4

let array=[3,5,7,9,11,13,15,17,19,21];
let prompt=require("prompt-sync")();
let num=prompt("Enter a number : ");
for(let i in array)
{
	if(array[i]==num)
		console.log(array[i],"is existed on index ",i);
}
*/




// assignment#
prime=[2,3,4,5,6,7,8,9,11,13];
let x,y;
for(let x of prime)
{
	
for(let y of prime)
{	
if(prime[x]%y!=0)
		console.log("prime", x);
}
}
		
// if(y==x)
	//console.log("PRIME: " + x);

