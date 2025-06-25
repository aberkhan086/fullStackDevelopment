//arthmetic operators
let a=10;
let b=20;
console.log("Arthmetic oprators");
console.log("addition is",a+b);
console.log("subtraction is",a-b);
console.log("multiplication is",a*b);
console.log("division is",a/b);
console.log("modulus is",a%b);
console.log("Exponent is",a**b);
console.log("\n");
//assisgnment oprators
let x=6;
console.log("addition assigment is",x+=5);
console.log("subtraction assigment is",x-=5);
console.log("multiplication assigment is",x*=5);
console.log("division assigment is",x/=5);
console.log("modulus assigment is",x%=5);
console.log("\n");
//comparision oprators
let y=26;
let z=25;
console.log("is equal",y==z);
console.log("isstrictequal",y===z);
console.log("is not equal",y!=z);
console.log("isnotstrictequal",y!==z);
console.log("is greater than",y>z);
console.log("is less than",y<z);
console.log("is greaterthanequal",y>=z);
console.log("is lessthanorequal",y<=z);
console.log("\n");
//logical operators
console.log("logical and",y>0 && b<0);
console.log("logical or",y>0 || z<0);
console.log("logical not",!(y<z));
console.log("\n");
//bitwise opeartors
console.log("bitwise and",y&z);
console.log("bitwise or",y|z);
console.log("bitwise XOR",y^z);
console.log("bitwise NOT",~z);
console.log("left shift",y<<1);
console.log("right shift",y>>1);
console.log("\n");
//ternary operator
let age=19;
let elig= (age>=18)?"ELigible to vote":"Not eligible to vote";
console.log("a person is",elig);
console.log("\n");
//typeof operator
let type=typeof a;
console.log("type of a is",type);