// let num=120;
let prompt = require ('prompt-sync')();
let num=prompt("Enter any number");
for(let  x=1; x<=num/2; ++x)
{
	if(num%x==0)
		console.log(x);
}


// factorial

let num=5;
let fact=1;


for(let x=num; x>=1; --x)
{
fact*=x;
console.log(fact);
}
