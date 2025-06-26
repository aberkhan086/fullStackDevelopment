document.title = "Dom in javascript";
document.body.style.backgroundColor="lightblue";
document.getElementById("heading1").innerHTML="DOM in MRCET";
document.getElementById("para1").style.color="blue";
document.getElementById("heading2").style.fontSize="20px";
let aber=document.getElementsByClassName("list");
aber[0].style.color="white";
aber[1].style.color="blue";
aber[2].style.color="green";
//query selector
document.querySelector(".dsa").style.color="red";
//quey selctor All
let khan=document.querySelectorAll(".klpr");      
khan[0].style.color="white";
khan[1].style.color="blue";
khan[2].style.color="green";
khan[3].style.color="pink";
/*change backroundcolor
function changeBackground(){
    document.body.style.backgroundColor=="red";
}*/

/* change bacground color to another and come again to previous
function changeBackground(){
    if(document.body.style.backgroundColor=="red"){
        document.body.style.backgroundColor="lightblue";
}
        else{
        document.body.style.backgroundColor="red";
}
}*/

/*change backroundcolor using ternary
function changeBackground(){
    document.body.style.backgroundColor=
      document.body.style.backgroundColor ==="lightblue"?"red":"lightblue";
}*/

//change background color with text colors
    function changeBackground(){
    if(document.body.style.backgroundColor=="red"){
        document.body.style.backgroundColor="lightblue";
        document.getElementById("para1").style.color="blue";
        let aber=document.getElementsByClassName("list");
        aber[0].style.color="white";
        aber[1].style.color="blue";
        aber[2].style.color="green";
        //query selector
        document.querySelector(".dsa").style.color="red";
        //quey selctor All
        let khan=document.querySelectorAll(".klpr");      
        khan[0].style.color="white";
        khan[1].style.color="blue";
        khan[2].style.color="green";
        khan[3].style.color="pink";
    }
    else{
        document.body.style.backgroundColor="red";
    document.getElementById("para1").style.color="white";
    document.querySelector(".dsa").style.color="white";
    let aber=document.getElementsByClassName("list");
    aber[0].style.color="white";
    aber[1].style.color="white";
    aber[2].style.color="white";
    let khan=document.querySelectorAll(".klpr");      
    khan[0].style.color="white";
    khan[1].style.color="white";
    khan[2].style.color="white";
    khan[3].style.color="white";
    alrert("background color change to red");
    }
}
//change text
   function changetext(){
    document.getElementById("heading3").innerHTML="CMRCET,CMRE,CN";
   }
