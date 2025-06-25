//if ,elseif,else.....
let age=18;
if (age<18){
    console.log("you are a minor");
}
else if(age>=18 & age<55){
    console.log("you are a young man");
}
else{
    console.log("you are a senior citizen")
}
console.log("\n"); 

//switch case
let day=6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
console.log("\n"); 
//for loop
for(i=0;i<4;i++){
    console.log("Iteration",i);
}
console.log("\n");
//while loop
let j=0;
while(j<5){
    console.log(" while Iteration",j);
    j++;
} 
console.log("\n");
//do...while loop
let k=0;
do{
    console.log("do....while loop iteration",k);
    k++;
}while(k<5);
console.log("\n");