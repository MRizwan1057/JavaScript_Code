
// calculation of income tax

let age=38;
let income=40000;
let taxrate=0;
if(age<60 && income<25000){
	taxrate=income*0;
}
else if (age<60 && income>=25000 && income<50000)
{
	taxrate=income*0.2;
}
else if (age<60 && income>50000)
{
	taxrate=income*0.3;
}
else if(age>=60 && age< 80 && income<30000)
{
	taxrate=income*0;
}
else if (age>=60 && age< 80 && income>=30000 && income<40000)
{
	taxrate=income*0.2;
}
else if(age>=60 && age< 80 && income>=40000)
{
	taxrate=income*0.3;
}
else if(age>80 && income<50000){
	taxrate=income*0;
}
else if (age>80 && income>50000)
{
taxrate=income*0.1;
}
	console.log(taxrate);
	
	
	
	// easy way to calculate income
let age=85;
let income=42000;
if (age<60)
{
	if (income<25000)
		tax=income*0;
	else if(income>=25000 && income<50000)
		tax=income*0.2;
	else
		tax=income*0.3;
}
else if (age>=60 && age <80){
	if(income<30000)
		tax=income*0;
	else if (income>=30000 && income< 40000)
		tax=income*0.2
	else 
		tax=income*0.3
}
else if (age>80){
	if(income<50000)
		tax=income*0;
	else
tax=income*0.1}
console.log(tax);