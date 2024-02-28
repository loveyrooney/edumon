"use strict"
let acc=document.getElementsByClassName('notice');

for(let i=0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        const content= this.nextElementSibling;

        if(content.style.maxHeight)
        {
            content.style.maxHeight='';
        }else{
            content.style.maxHeight="30vh";
        }

    });

}