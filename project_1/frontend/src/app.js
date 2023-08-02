const splash = document.querySelector('.splash');

document.addEventListener('DOMcontentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }   ,2000);
})

const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >=50){
        header.classList.add('bodybg')
    }else{
        header.classList.remove('bodybg');
    }
}