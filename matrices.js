/*
let mat1=[[1,2,3],[2,3,4],[3,4,5]];
let prompt=require("prompt-sync")();
for (let i in mat1)
{
	for(let j in mat1[i])
	{
		mat1[i][j]=prompt("enter value ("+i+", "+j+")");
	}
}


for (let i in mat1)
{
	for(let j in mat1[i])
	{
		console.log(mat1[i][j]);
	}
}
console.log(mat1);


for (let i in mat1)
{
	for(let j in mat1[i])
	{
		process.stdout.write(mat1[i][j] + " ");
	}
		process.stdout.write("\n");
}
*/









let mat1=[[1,2,3],[2,3,4],[3,4,5]];
let mat2=[[1,2,3],[2,3,4],[3,4,5]];
let mat3=[[1,2,3],[2,3,4],[3,4,5]];
let prompt=require("prompt-sync")();
for (let i in mat1)
{
	for(let j in mat1[i])
	{
		mat1[i][j]=Number(prompt("enter value ("+i+", "+j+")"));
	}
}



for (let i in mat1)
{
	for(let j in mat1[i])
	{
		process.stdout.write(mat1[i][j] + " ");
	}
		process.stdout.write("\n");
}




for (let i in mat2)
{
	for(let j in mat2[i])
	{
		process.stdout.write(mat2[i][j] + " ");
	}
		process.stdout.write("\n");
}



for (let i in mat1)
{
	for(let j in mat1[i])
	{
		mat3[i][j]=mat1[i][j] + mat2[i][j];
	}
}

console.log("Result: ");

for (let x of mat3)
{
	for(let y of x)
	{
		process.stdout.write(y + " ");
	}
	process.stdout.write("\n");
}


let mat1=[[1,2,3],[2,3,4],[3,4,5]];
let mat2=[[1,2,3],[2,3,4],[3,4,5]];
let mat3=[[1,2,3],[2,3,4],[3,4,5]];
let prompt=require("prompt-sync")();
for (let i=0; i>=mat1.length-1; i++)
{
	for(let j=0; j>=mat1.length-1)
	{
		mat1[i][j]=Number(prompt("enter value ("+i+", "+j+")"));
	}
}

for (let i=0; mat1)
{
	for(let j in mat1[i])
	{
		process.stdout.write(mat1[i][j] + " ");
	}
		process.stdout.write("\n");
}




for (let i in mat2)
{
	for(let j in mat2[i])
	{
		process.stdout.write(mat2[i][j] + " ");
	}
		process.stdout.write("\n");
}



for (let i in mat1)
{
	for(let j in mat1[i])
	{
		mat3[i][j]=mat1[i][j] + mat2[i][j];
	}
}

console.log("Result: ");

for (let x of mat3)
{
	for(let y of x)
	{
		process.stdout.write(y + " ");
	}
	process.stdout.write("\n");
}



























































