let x = "";


const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "<h2>"
}







      console.log(x);







  let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

// for (let i in myObj.cars) {
//   x += "<h2>" + myObj.cars[i].name + "</h2>";
//   console.log(x);
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "<br>";
// }

let t = myObj.cars[1].name;
let y = myObj.cars[1].models[1];

document.getElementById("demos").innerHTML = "<h2>" + t + " " + y + "</h2>";





