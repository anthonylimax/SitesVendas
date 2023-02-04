
const pictures = document.querySelectorAll('[data-animation]')
const links = document.getElementsByClassName('link')
const boxInfo = document.getElementsByClassName('boxInfo')
let i = 1;



setInterval(()=>{
    pictures[i-1].dataset.animation = ''
    if(i===3){
    i=0;
    pictures[i].dataset.animation = 'fade'
    }
    pictures[i].dataset.animation = 'fade'
    i++;
},6000)


for(let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseenter', ()=>{   
            boxInfo[i].classList.add('activated-box')
    })
    links[i].addEventListener('mouseleave', ()=>{   
            boxInfo[i].classList.remove('activated-box')
    })
}