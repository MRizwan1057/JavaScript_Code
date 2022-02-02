// LCM

let x1=8, x2=6;
let LCM=0;
// start with x1 (or x2), end until x1*x2 as LCM can never be greater than x1*x2, step by +1
for(let c=x1;c<x1*x2;c++)
{
	if(c%x1==0 && c%x2==0) // if current counter value is divisible by both x1 and x2, then c is the LCM.
	{
		LCM=c; // set LCM equal to c
		break; // no need to check further, just exit the loop
	}
}console.log(LCM);
// now print the table of LCM
for(let x=8;x<=12;x++)
{
	console.log(`${LCM} * ${x} = ${LCM*x}`);
}
// HCF/GCD


/*
let x1=24, x2=72;
let HCF=0;

for(let i=x1<x2?x1:x2; i>0; i--)
{
	if(x1%i==0 && x2%i==0)
	{
		HCF=i;
		break;
	}
}console.log(HCF);
*/