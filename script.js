const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const body = document.querySelector('body')


body.style.backgroundColor = 'black'
btn.addEventListener('click', redbg)
btn1.addEventListener('click', bluebg)
btn2.addEventListener('click', greenbg)

function redbg(){
    const colors = 'red'
    body.style.backgroundColor = colors;
    body.style.transitionDuration = ".7s";
}
function bluebg(){
    const colors = 'blue'
    body.style.backgroundColor = colors;
    body.style.transitionDuration = ".7s";
}
function greenbg(){
    const colors = 'green'
    body.style.backgroundColor = colors;
    body.style.transitionDuration = ".7s";
}
