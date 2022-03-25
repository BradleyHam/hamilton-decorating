const FQButtons = document.querySelectorAll('.FQ');
const closeFQ = document.querySelector('.close-FQ');
const modal = document.getElementById('modal');

FQButtons.forEach( button => {
    button.addEventListener('click', () => {
        modal.classList.toggle('d-none')
    })
})

closeFQ.addEventListener('click', ()=> {
   
    modal.classList.toggle('d-none')
})

