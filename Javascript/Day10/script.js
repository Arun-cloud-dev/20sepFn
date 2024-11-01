// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");

const { resolve } = require("styled-jsx/macro")


// console.log(lastname);



// async ...   .then()    await

// const getData  = async () => {
//     let data = " hello arun";
//     return data ; //retuning the promise with a resolved  value 

// } 

// getData().then (data => console.log(data))




// const getData = async() => {
//     let y = await "hello sowmia"; // aswait pause untill hello world resolves
//     console.log(
//     y)
//     ;

// }


// console.log(1);
// console.log(4);
// getData();
// console.log(2);
// console.log(6);


function asynch_op_methord() {
    let first_promise = new Promise((resolve, reject) => resolve('hello')); // Corrected to `resolve`
    
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("get this checked out"); // Resolves after 6 seconds
        }, 6000);
    });

    let combined_promise = Promise.all([first_promise, second_promise]); // Changed to `[...]` (array syntax)
    return combined_promise;
}

async function dispaly() {
    let data = await asynch_op_methord(); // Awaits the result of `asynch_op_methord`
    console.log(data); // Logs the resolved values of both promises
}

dispaly();

