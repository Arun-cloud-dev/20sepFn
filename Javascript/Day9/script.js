// fetch ('https://api.github.com/users')
// .then(response => response.json())
// .then(data => {
//     data.forEach(user => {
//         console.log(user.login);
//     })
// })

// .catch (error => console.log('error', error ));



// fetch('https://api.github.com/users/Arun-cloud-dev') 
// .then(response => response.json())
// .then(data => {
//     const userList = document.getElementById("userList");
//     data.forEach(user =>{
//         const listItem = document.createElement('li');
//         listItem.textContent = user.login;
//         userList.appendChild(listItem);
//     });
// })

// .catch (error => console.log('error', error));


fetch('https://api.github.com/users/Arun-cloud-dev') 
.then(response => response.json())
.then(data => {
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.name;
})
.catch(error => console.error('errors', error))