
let addToy = false;
const toyForm = document.querySelector('.container')
const addBtn = document.querySelector('#new-toy-btn')
let collection = document.querySelector('#toy-collection')
let likeValue = 0
//Event listener for form


//Event handlers
// function handleSubmit(e) {
//   e.preventDefault()
//   let
// }

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  //Render DOM
  function renderOneToy(toy) {
    const card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <div>
      <h2>${toy.name}</h2>
    </div>
    <img src="${toy.image}" class="toy-avatar">
    <p>${toy.likes} likes</p>
  `
    //Like button
    const likeBtn = document.createElement('button')
    likeBtn.innerHTML = 'like'
    card.appendChild(likeBtn)
    likeBtn.addEventListener('click', handleLikes)
    collection.appendChild(card)
  }



  //Fetch toys
  const BASE_URL = "http://localhost:3000/toys"

  function getToys() {
    return fetch(BASE_URL)
      .then(resp => resp.json())
      .then(toys => toys.forEach(toy => renderOneToy(toy)))
      .catch(function () {
        alert('Cannot find requested toy list.')
      })
  }
  getToys()

  //POST likes
  function handleLikes() {
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        "Accept": "application/json"
      },
      Body: JSON.stringify(toy)
    })
      .then(resp => resp.json())
      .then(toy => console.log(toy.likes))
      .catch(function () {
        alert('Cannot find requested toy list.')
      })

  }
})



