// Grand Test// M.Rizwan


let hour=[8,15,20,11,10,23];
let mint=[50,30,22,5,15,2];
let secd=[28,2,20,50,33,10];
let time=0;
let non="pm", mor="am";
morslot=0, eveslot=0;


for(let i in hour)
{
	time++;

if(hour[i]>=12){
	eveslot++;
}
else
		morslot++;



if(hour[i]>=12){
	hour[i]=hour[i]-12;
	mint[i]=mint[i]+ "  " + non;
}else
		mint[i]=mint[i]+"  " + mor;


if(hour[i]<10)
	{
	hour[i]="0"+hour[i];
	}

if(mint[i]<10)
	{
	mint[i]="0"+mint[i];
	}
	
if(secd[i]<10)
	{
	secd[i]="0"+secd[i];
	}
	
	console.log("Time", time, ":" , hour[i], ": ",  mint[i],"(",secd[i],"seconds",")");

}

console.log(" morning slot : ", morslot, " evening slot : ",eveslot);
