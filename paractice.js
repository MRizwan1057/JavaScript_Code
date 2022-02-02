/*
let prompt=require("prompt-sync")();
let a=prompt("enter number a :");
let b=prompt("enter number b :");
let c=a;
a=b;
b=c;
console.log(a,b,c);
*/
// Arrays
// #2
/*
let hour=[3,4,5,6,7];
let emprate=[300, 400, 500, 600,700];

for(let i=0; i<=hour.length-1; i++){
 if(i<4)

	process.stdout.write(hour[i] + "" + ",");
else 
	process.stdout.write(hour[i] + "");
}
process.stdout.write("\n");


for(let j=0; j<=emprate.length-1; j++){
 if(j<4)

	process.stdout.write(emprate[j] + "" + ",");
else 
	process.stdout.write(emprate[j] + "");
}
process.stdout.write("\n");
*/

/*
// #3

let hour=[3,4,5,6,7];
let emprate=[300, 400, 500, 600,700];
let payment=[];
let sum=0

/*
for(let k in hour)
{
	payment[k]=hour[k]*emprate[k];
	sum+=payment[k];
	process.stdout.write("Pay of Employee " + k + ": "+ hour[k] + "X"+ emprate[k] + " = " + payment[k] + "\n" + "");
	
}
console.log("sum of payment is : ",sum);
console.log("Average of Payment is : ", sum/payment.length);
*/

// #4
let hour=[3,4,5,6,7];
let emprate=[500, 400, 500, 600,700];
let payment=[];
let sum=0
let min=99999;
let bonus=0;
for(let k in hour)
{
	payment[k]=hour[k]*emprate[k];
	sum+=payment[k];
	process.stdout.write("Pay of Employee " + k + ": "+ hour[k] + "X"+ emprate[k] + " = " + payment[k] + "\n" + "");
	
}
console.log("sum of payment is : ",sum);
console.log("Average of Payment is : ", sum/payment.length);

for(let p in payment)
{
	if(payment[p]< min)
	min=payment[p];
}

if(min>1000 && min<2000)
{
	bonus=500;
}
let total=min+bonus+(0.2*min)
console.log(min, "+", (0.2*min),"+" , bonus, "=" , total);