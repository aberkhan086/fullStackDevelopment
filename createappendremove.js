let robo=document.createElement("p");
//using text content
//robo.textContent="Iam chitti";
//using innerhtml
robo.innerHTML="Iam chitti";
document.getElementById("vasi").appendChild(robo);
robo.style.color="red";
robo.style.fontSize="40px";

//removing element without timeout
let rem=document.getElementsByClassName("list")[0];
rem.remove();

//removing element using certain time period
setTimeout(()=>{
    let re=document.getElementsByClassName("list")[1];
    if(re){
        re.remove();
    }
},2000);

//creating a new heading
let newHeading=document.createElement("h2");
newHeading.innerHTML="This is the new heading from js file";
newHeading.style.color="purple";
document.body.appendChild(newHeading);

//appending the text after 3 sec
setTimeout(()=>{
    let newText=document.createElement("p");
    newText.textContent="This text added after 3 sec";
    newText.style.color="green";
    document.body.appendChild(newText);
       
},3000);

//append text to tag
let tagText= document.createElement("p");
tagText.textContent="this text append to the tag";
tagText.style.color="orange";
document.getElementById("vasi").appendChild(tagText);

//Appending the list
let mylist=document.createElement("ul");
for(let i=1;i<=4;i++){
    let listitems=document.createElement("li");
    listitems.textContent=`Item ${i}`;
    listitems.style.color="red";
    listitems.style.fontsize="34px";
    mylist.appendChild(listitems);
}
document.body,appendChild(mylist);
