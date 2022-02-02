// Unary Operators[-- , ++ , !]

let x=5;
let y=10;
let z=0;
console.log(x)
++x;
console.log(x);
 --x;
console.log(x);
z=++x + y;
console.log(z);
z=--x + y;
console.log(z);
z=--x + --y;
console.log(z);
z=++x - ++y;
console.log(z);
q=z*z/z;
console.log(q);
q=q/z*x;
console.log(q);
q=z*y/y - ++x + --y;
console.log(q);
console.log(x);
console.log(y);
console.log(z);
console.log(q+x+y+z);