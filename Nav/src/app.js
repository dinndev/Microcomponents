// Selctors

const lists = document.querySelectorAll('li');
 
const container = document.querySelector('.container');

//Events
lists.forEach(list => {
    list.addEventListener('click', e => {
        e.preventDefault()
        const active = document.querySelector("li.active");
        const isSame = active == list
        if(active) active.classList.remove('active')
        if (!isSame) list.classList.add('active');
        console.log(e.target)
    });
});

