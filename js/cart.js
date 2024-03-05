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

/* 가격 계산_1 */
/*
let check_choice=document.querySelectorAll('.choice');
 let tot_price;

 let fn=function(event) {
     let ch_check_div = event.target.parentElement.parentElement;
     let child_check_div= ch_check_div.children;

      let price=child_check_div[3].querySelectorAll('.price');
      let su=child_check_div[4].querySelectorAll('.num');

      //console.log(price[0].value);
      //console.log(su[0].value);

      let book_price=Number(price[0].value.replace(',',''));


       su[0].onchange=function(e){

           tot_price=Number(book_price) * Number(e.target.value);

           document.getElementById("tot_price").value
           = tot_price.toLocaleString();
       }

 }
 check_choice.forEach(item=>{
        item.onchange=fn;
 });
 */

/* 가격 계산_2 */
let check_choice=document.querySelectorAll('.choice');
let tot=[];
let i=0;
let delivery=Number(document.getElementById("delivery").value.replace(',',''));
let fn=function check_box(event) {

    let ch_check_div = event.target.parentElement.parentElement;
    let child_check_div = ch_check_div.children;

    let price = child_check_div[3].querySelectorAll('.price');
     let su= child_check_div[4].querySelectorAll('.num');

    let data_price = price[0].value.replace(",", "");
    let data_su = Number(su[0].value);

    if (child_check_div[0].children[0].checked === true) {
        tot[i] = Number(data_price * data_su);
        i++;
    }else{
        i--;
       tot.pop();
    }
    console.log(tot);
    let tot_price=0;
    tot.forEach(item=>{
        tot_price+=item;
    });
    document.getElementById('tot_price').value=tot_price.toLocaleString();
    document.getElementById("result").value = tot_price.toLocaleString();

    //change function!! change시 수량 변경
    su[0].onchange=function (e) {

        let data= e.target.parentElement.parentElement.parentElement;
        let ele_data=data.querySelectorAll('input[type="number"]');
       for(let i=0; i<ele_data.length; i++)
       {
           if(ele_data[i]===e.target)
           {
               let pr = price[0].value.replace(',', '');
               tot[i] = Number(e.target.value) * Number(pr);
           }
       }

        tot_price=0;

        console.log(tot,'test!!!');

        tot.forEach(item => {
            tot_price += item;
        })
        console.log(tot_price,"tot_price");
        document.getElementById("tot_price").value = tot_price.toLocaleString();
        document.getElementById("result").value = tot_price.toLocaleString();
        /*if (tot_price > 0) {
            document.getElementById("delivery").value = 0
            document.getElementById("result").value = tot_price.toLocaleString();
        } else {
            document.getElementById("result").value = (tot_price + delivery).toLocaleString();
        }*/
    }

} //fn

    /*
    for(let i=0; i<check_choice.length; i++){
          console.log(check_choice,'test');
        if(check_choice[i].checked===true){
            //tot[i]=Number(su[0].value)*Number(price[0].value.replace(',',''));
            console.log(tot);
       }
        }
    }
 */

check_choice.forEach(item=>{
    item.onchange=fn;
});

/* 쇼핑 계속하기 */
document.getElementById("shopping").onclick=function (){
    location.href='product.html';
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
    }else{
        location.href='login.html';
    }
});

