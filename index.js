console.log("JS is now connected!")

//STEP 1: grab the HTML elements.
const inputBox = document.querySelector("#input-Box");
const addBtn = document.querySelector("#add-Btn");
const ul = document.querySelector('ul');
const message = document.querySelector('#message');


//STEP 2: write your callback function.
function addMovieValue(event){
    event.preventDefault();//in html, the event happens inside form tag. forms automatically refresh on its own. To prevent it refresh and disappear, we need this.

    const li = document.createElement('li');
    const movieTitle = document.createElement('span');

    movieTitle.textContent = inputBox.value;
    li.appendChild(movieTitle);
    ul.appendChild(li);

    //delete movie, create delete button first.
    const deleteBtn = document.createElement('button');
    //what's inside the button? the "x" cross 
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);
    //next, delete movies, add event listener when click deletebtn.
    deleteBtn.addEventListener("click", deleteMovie);

    //cross out watched movie that we create inside addMovieValue function, so it has to continue writing event listener within this {}.
    movieTitle.addEventListener("click", crossOffMovie);

   
}

function deleteMovie(){
    
}

function crossOffMovie(event){
   event.target.classList.toogle('checked')
}

//STEP 3: comebine your elements and functions using eventListener.
addBtn.addEventListener("click", addMovieValue);