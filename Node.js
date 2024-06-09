// // let marks = [97,86,73,65,54];
// // marks [3] = 55;
// // console.log(marks);

// let heros = ["spiderman","iron", 'hulk', 'thor', 'caption','joker']

// //  for loop array
// //  for ( let idx= 0; idx < heros.length; idx++){
// //       console.log(heros[idx]);
// //  }

// //  for of loop array
// for (let hero of heros){
//       console.log(hero);
// }

// let city = ["Dhaka", "Noakhali","Chittagong", "Khulna", "Rajshahi"];

// for ( let c of city){
//       console.log(c.toUpperCase());
// }


// let marks = [97,86,73,65,54,76,34];

// let sum = 0;

// for (let val of marks){
//      sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


//  let items = ["300","400","500","600","700","800"];

//   for (let i = 0; i < items.length; i++){
//      let offer = items[i] / 10;
//      items[i] -= offer;
//   }
//  console.log(items);

//  let footItema = ["tomato", "apple","chipe","burger","potato"]

//  footItema.pop()

//  console.log(footItema);

//  let mervelHero = ["ironman","spiderman", "black panter","hulk"]

//   let val = mervelHero.unshift("antman");

//   let arr = [1,4,5,6,7,8,9];

//   arr.splice(2,2,34,56,78);

//   console.log(arr);

//   let companies = ["Bloomberg","Microsoft","apple","Uber","google","Netflix","IBM"]

//   console.log(companies.shift());

//   console.log(companies.splice(2,1,"ola"));

//   console.log(companies.push("Amazon"));

// // let mak = [99,88,79,65,54,76,34];

// // let total = 0;

// // for ( let val of mak){
// //      total += val;
// // }

// // let avge = total / mak.length;
// // console.log(avge);


// const result = document.querySelector(".result input");
// const copyBtn = document.getElementById("copy-btn");
// const sliders = document.querySelectorAll(".wrapper input");

// const rColor =document.getElementById("red");
// const gColor =document.getElementById("green");
// const bColor =document.getElementById("blue");

// let generateColor = () => {
//     let rColorValue = rColor.value;
//     let gColorValue = gColor.value;
//     let bColorValue = bColor.value;

//     let finalColor = `rgb(${rColorValue},${gColorValue},${bColorValue})`; 

//     result.value = finalColor;

//     document.body.style.backgroundColor = finalColor;
// }
   
// let copyColorCode = () => {
//   result.select();
//   document.execCommand("copy");
//   copyBtn.innerText = "copied!";
//   setTimeout(() => {
//       copyBtn.innerText = "copy color code";
//   }, 1000);
// };
 
//   sliders.forEach((inp) => {
//     inp.addEventListener("input", generateColor);
//   });
    
//    window.addEventListener("load",generateColor);

//    copyBtn.addEventListener("click", copyColorCode);

  
  

