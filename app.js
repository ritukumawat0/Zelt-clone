let bars=document.querySelector('.fa-bars');
let header=document.querySelector('.header');

bars.addEventListener('click',function(){
    header.classList.toggle('head1');
    console.dir(header)
});