"use strict"
let acc=document.getElementsByClassName('notice');

for(let i=0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = '';
        } else {
            content.style.maxHeight = "300px";
        }

    });
}

/* 가격 계산 */
 let check_choice=document.querySelectorAll('.choice');

 let fn=function(event) {
     let ch_check_div = event.target.parentElement.parentElement;
     let child_check_div= ch_check_div.children;

      let price=child_check_div[3].querySelectorAll('.price');
      let su=child_check_div[4].querySelectorAll('.num');

      //console.log(price[0].value);
      //console.log(su[0].value);

      let book_price=Number(price[0].value.replace(',',''));
      let tot;

       su[0].onchange=function(e){

           tot=Number(book_price) * Number(e.target.value);

           document.getElementById("tot_price").value
           = tot.toLocaleString();
       }

 }
 check_choice.forEach(item=>{
        item.onchange=fn;
 });


 /* 쇼핑 계속하기 */
document.getElementById("shopping").onclick=function (){
    location.replace('product.html');
}

/* 전체 삭제 */
document.getElementById("all_del").addEventListener('click',function (){
    confirm('모든 상품을 삭제하시겠습니까?');
});

 /* 선택 삭제 */
document.getElementById("del").addEventListener('click',function (){
    let check1=document.getElementById("check").checked;
    let check2=document.getElementById("check2").checked;
   
    if(check1===false&&check2===false){
        alert('하나 이상의 상품을 선택해 주세요.');
    }else{
        confirm("선택하신 상품을 삭제하시겠습니까?");
    }
});

/* 주문하기 */
document.getElementById("order").addEventListener('click',function (){
    let check1=document.getElementById("check").checked;
    let check2=document.getElementById("check2").checked;

    if(check1===false&&check2===false) {
        alert('하나 이상의 상품을 선택해 주세요.');
    }
});

