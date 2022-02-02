let weight=50;
let height=50;
let  bmi=703*weight/(height*height);
console.log(bmi);
if (bmi<=18.5)
	console.log("Underweight");
	
else if (bmi>18.5 && bmi<25)
	console.log("Normal");
else if (bmi>=25 && bmi<30)
	console.log("Overweight");
else 
	console.log("Obese");
