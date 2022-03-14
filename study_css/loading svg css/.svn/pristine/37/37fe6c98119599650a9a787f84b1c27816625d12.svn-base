'use strict';

const dnaBox = document.querySelector('.loadingBox2.DNA');

dnaBox.addEventListener('mouseenter',()=>{
    document.querySelector('.loadingDNA').style.transition = 'none'
})

dnaBox.addEventListener('mousemove',(event)=>{
    
    document.querySelector('.loadingDNA').style.left = event.pageX + 'px'
    document.querySelector('.loadingDNA').style.top = event.pageY -dnaBox.offsetTop + 'px'
})

dnaBox.addEventListener('mouseleave',(event)=>{
    
    // document.querySelector('.loadingDNA').animate([
    //     {left: '50%' , top : '50%'}
    // ],
    // {
    //     duration:1000
    // })

    document.querySelector('.loadingDNA').style.transition = 'all 1s'
        document.querySelector('.loadingDNA').style.left = '50%'
        document.querySelector('.loadingDNA').style.top = '50%'

})


