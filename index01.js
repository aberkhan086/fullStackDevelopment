//synchronus process
/*console.log("helooo ooo");
function sayHello(){
    console.log("hellooo from saayHello function");
}
sayHello();
console.log("byeeeeeeeeeeeee");
//asynchronus process
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("heloo world");
},5000);
console.log("three");
console.log("four");
//call back function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,ds){
    ds(a,b);
}
calculator(5,5,sum);
//direct way
calculator(5,10,(a,b)=>{
    console.log(a+b);          
})
//nested for loops
for(let i=0;i<5;i++)
{
    let str="";
    for(let j=0;j<5;j++)
    {
        str+=j;
    }
    console.log(i,str);
}

function getData(dataid){
    setTimeout(()=>{
        console.log("fetching data for id:",dataid)
    },5000);
}
getData(1);
getData(2);*/

//
/*function getData(dataid,getnextdata){
    setTimeout(()=>{
        console.log("fetching the data for id:",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000)
}
getData(1,()=>{
    console.log("getting data of id 1");
    getData(2,()=>{
            console.log("getting data of id 2");
            getData(3);
    });
});*/
//promise exx
/*const myPromise=new Promise((resolve,reject)=>{
    //asynchoronus operation
    setTimeout(()=>{
        const success=true;
        if(success){
            resolve("Data fetched successfully");
        }else{
            reject("ERror in fetching")
        }
    },2000);
});
myPromise
.then((data)=>{
    console.log("Promise resolves with data:",data);
})
.catch((err)=>{
    console.log("promise resolves with error:",err);
});

let promise= new Promise((resolve,reject)=>{
    console.log("iam promissing");
    if(1<0){
        resolve(1233445656);
    }else{
        
        reject("Something went wrong");
    }
});
promise
.then((data)=>{
    console.log("Promise resolves with data:",data);
})
.catch((err)=>{
    console.log("promise resolves with error:",err);
});
/////
function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("fetching data for id:",dataid);
        resolve("success")
    },2000);
});
}
let result=getData(123);
result;
getData(101)
    .then(result =>{
        console.log("first fetch:",result);
        return getData(102);
    })
    .then(result =>{
        console.log("second fetch",result);
        return getData(103);
    })
    .catch(err =>{
        console.log("error",err);
    });*/
//promise chaining is used to ensure one task, and start after the previous one complete
// function asynFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success")
//         },2000);

//     });
// }
// function asynFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//             resolve("failure")
//         },4000);
//     });
// }
// console.log("fetching for the data 1....");
// let p1=asynFunc1();
// p1.then((data)=>{
//     console.log("data fetched",data);
//     p1.catch((err)=>{
//         console.log("error",err);
//     })
//     console.log("fetching for the data 2....");
//     let p2=asynFunc2();
//     p2.then((data)=>{
//         console.log("data fetched",data);
//     });
// });
//==========
function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fetching data for id",id);
            resolve(id);
            reject(id);
        },5000);
    });
}
 async function fetchData(){
    try{
        const data1=await getData(101);
        console.log("First fetch",data1);
        const data2=await getData(102);
        console.log("Second fetch",data2);
        const data3=await getData(103);
        console.log("third fetch",data3);
    }catch(error){
        console.log("error occurred",error);
    }  
}
fetchData();
async function getnextdata(){
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);
    console.log("getting data 3.....");
    await getData(3);

}
getnextdata();