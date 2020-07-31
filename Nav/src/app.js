// Selctors

const lists = document.querySelectorAll('li');
 
const container = document.querySelector('.container');

console.log(container.cloneNode(false))
//Events
lists.forEach(list => {
    list.addEventListener('click', e => {
        e.preventDefault()
        const active = document.querySelector("li.active");
        const isSame = active == list
        if(active) active.classList.remove('active')
        if (!isSame) list.classList.add('active');
    });
});

