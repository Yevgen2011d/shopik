const urlParam = new URLSearchParams(window.location.search)
const id = urlParam.get('id')

let profile = document.getElementById('profile')
let url = 'https://my-json-server.typicode.com/robocode-pixel/baraholka'

fetch(`${url}/users/${id}`)
.then(async function(response) {
    let user = await response.json();
    profile.innerHTML = `
    <h1>${user.name}</h1>
    <h2>${user.surname}</h2>
    <img class="profile-img" srf="${user.photo_url}">
    <p>Balance: ${user.balance}$</p>
    `
})