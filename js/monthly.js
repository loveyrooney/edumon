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
            content.style.maxHeight="60vh";
        }

    });

}

document.getElementById("add").onclick=function (){
    let result=confirm("상품을 장바구니에 추가했습니다. 장바구니에 가시겠습니까?");
    if(result){
        window.location.href = 'cart.html'
    }
}
