//Progress Bar

//Selectors
const progressBar = document.querySelector('.bar');
const barContainer = document.querySelector('.bar-container');
const innerHeight = window.innerHeight;
const scrollHeight = document.body.scrollHeight;
const totalHeight = innerHeight - scrollHeight


// functions
function barMoveMent(){
    
}

//Event Listeners
progressBar.addEventListener('onscroll', barMoveMent())


