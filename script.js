
// console.log("hey1")
// console.log("hey2")
// console.log("hey3")

// ************SetTimeout*******************
// setTimeout(function(){
//     console.log("hey4")
// },1000)
// 
// console.log("hey")
// setTimeout(()=>{
//     console.log("async")
// })
// setTimeout(()=>{
//     console.log.apply("")
// })
// ************SetInterval**********************
// // setInterval(()=>{
// //     console.log("jhadka")
// // },3000)
// var count = 1
// var stop = setInterval(()=>{
//     count ++
//     console.log(count)
//         if(count === 3) clearInterval(stop)  /// stop set intrval
    
// },1500)

// **********************fetch****** Axios***********
// fetch(`https://randomuser.me/api/`)        bring the data from url
//  .then(raw => raw.json())               change the raw data to json
//  .then(raw => console.log(raw));            json goes to this line var


//  Axios(`https://randomuser.me/api/`) 
//  .then(res=> console.log(res))           directly receives the readable data

// *********** promise******************
// const letter = new Promise(function(resolve, reject){
// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(result => {
//     if(result.results[0].gender=== "male") resolve();
//     else(reject());
// })
// })

// letter
// .then(function(){console.log("done")})
// .catch(function(){console.log("reject")});

// ***********************Call back function*************** 

// function doAsyncTask(url, callback){
//     fetch(url)
//     .then(raw => raw.json)
//     .then(res=>{
//         callback(result);
//     })
// }
//  doAsyncTask("some url", function(result){
//     console.log(result.results[0].email,result)
//  })


// **********************Async/ Await*********************
// with async await you can write async code like an normal code.

// async function abcd(){
// let a = await fetch(`https://randomuser.me/api/`);  // doesnot matter about sidebstack it will run first if there is await.
//  a = await a.json();
// console.log(a);
// }
// abcd();

// **********************Event loop***********************
// event loop checks if the main stack is empty or if the code is ready to execute it is an mediator

// examplessssssss************************************************************

// function fetchData(url, callback){
//  fetch(url)
//  .then(raw=>raw.json())
//  .then(result=>{
//     callback(result);
//  })
// }

// fetchData(`https://randomuser.me/api/`, function(result){
//     console.log(result)
// })

//  const letter= new promise(function(resolve, result){
//  fetch (url)
//  .then(raw=> raw.json())
//  .then(result=>{
//     if(result.results[0].gender=== male){
//         resolve(result);
//     }
//     else result();
//  })
//  })

// async function dataFetcher(url){
//   let data =await fetch(url);
//   let result = await data.json();
//  return result; 

// }

// async function hh(){
// let chacha = await dataFetcher(`https://randomuser.me/api/`)
// console.log(chacha);
// }
// hh();

// *******************************Generator*************************

var nums = Array.from({length:1000}, (a,b)=> b+1);
const worker = new Worker ('worker.js')//  creating an worker

worker.postMessage(nums); //// send the datato worker.js file 

worker.onmessage = function(data){
    console.log(data.data)
}
