//loops

/*
for(let x=2; x<=50;x+=2)
{
	console.log(x);
}


for(let x= -1; x>=-13;x-=4)
{
	console.log(x);
}

for (let z=1; z<=100; ++z)
{
	console.log(z);
}
for(let y=100; y>=1; --y)
{
	console.log(y);
}
for (let s=7; s<=77; s+=7)
	console.log(s);


for(let m=20; m>=2; m-=2)
	console.log(m);


for (let n=2; n>=17; n+=3)
	console.log(n);


for (let e=99; e<=55; e-=11)
	console.log(e);
*/

// sum odd and even
/*



let start=1 , end= 10;
let sumeven=0;
let sumodd=0;
for(let x=start; x<=end; ++x)
{
	if(x%2==0)
sumeven+=x;
else
	sumodd+=x;
}	
console.log(sumeven);
console.log(sumodd);

*/

// factorial

/*
let num=5;
let fact=1;


for(let x=num; x>=1; --x)
{
fact*=x;
console.log(fact);
}
*/

// factors

/*

let num=120;
for(let x=2; x<=num/2; ++x)
{
if(num%x==0)

console.log(x);
}
*/

// break the loop
/*
let a=11;
let x;
for (x=2; x<a; ++x)
{
	if(a%x==0)
	{console.log(a + " is not a Prime Number");
		break;
	
	}
}
	if(x==a)
		console.log("prime");

*/

// display odd num from num1-num2
/*

let num1=5 , num2=11;
let x;
for(x=num1; x<=num2; ++x)
{
	if(x%2!=0)
		console.log(x);
}
*/
// sum odd num squares from num1-num2
/*
let num1=5 , num2=11;
let sum=0;
let x;

for(x=num1; x<=num2; ++x)
{
	if(x%2!=0)
	{
		
	sum=x*x+sum;
	}
}
console.log(sum);

*/
// while loop

/*
let num1=5, num2=11;
let x=num1;
while(x<=num2)
{
	if(x%2!=0)
		console.log(x);
	++x
}

*/


//pi

/*
let start=1 , end=999;
let x;
let term=1;
let sum=0 , minus=0;

for(x=start; x<=end; x+=2)
{
	
		if(term%2==0) 
	
		minus-=1/x;
		else
			sum+=1/x;
		term++
	}
let pi=4*(minus+sum);
console.log(pi);
*/
/*

let num1=5 , num2=11;
let sum=0;
let x=num1;

while(x<=num2)
{
	if(x%2!=0)
		sum=x*x+sum;
	++x;
}
console.log(sum);
*/
/*

let start=1 , end=999;
let term=1;
let sum=0 , minus=0;
let x=start;
while(x<=end)
{
	if(term%2==0)
		minus-=1/x;
	else 
		sum+=1/x;
	term++;
	x+=2;
}
let pi=4*(minus+sum);
console.log(pi);
*/

// table of any number

/*
let start=55, end=99;
let num=7;
let x=start;
for(x=start; x<=end; x++)
	console.log(num + " x " + x + " = " +   x*num);
*/

/*

let start=1 , end=100;
let sum=0;
let x;
for(x=start; x<=end; x++)
{
	sum=sum+1/x;

}
console.log(sum);
*/

/*
let start=1 , end=100;
let sum=0;
let x;
for(x=start; x<=end; x++){
	sum+=1/x**2;
}
console.log(sum);
*/


let a=1/2, end=100;
let sum=0 , exp=1;
let x=exp;
for(x=exp; x<end; x++){
	sum=a**x;
}
console.log(sum);


