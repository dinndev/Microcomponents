//Progress Bar

//Selectors
const progressBar = document.querySelector('.bar');


//Event Listeners
window.addEventListener('scroll', event=> {
  let scrollTop = document.documentElement.scrollTop
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let progress = 100 * (scrollTop / scrollHeight);
  progressBar.style.width = progress + '%' ;
});




