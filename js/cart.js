"use strict"
let acc=document.getElementsByClassName('notice');

for(let i=0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = '';
        } else {
            content.style.maxHeight = "30vh";
        }

    });
}

let tot_price;




    // let price=Number(document.getElementById("price").value.replace());
    //
    // tot_price=price*Number(n.value);
    // document.getElementById("tot_price").value=tot_price;

 let check_choice=document.querySelectorAll('.choice');


 let fn=function(event) {
     let ch_check_div = event.target.parentElement.parentElement;
     let child_check_div= ch_check_div.children;

      let price=child_check_div[2].querySelectorAll('.price');
      let su=child_check_div[3].querySelectorAll('.num');

      //console.log(price[0].value);
      //console.log(su[0].value);


      let pr=Number(price[0].value.replace(',',''))
      let tot


       su[0].onchange=function(e){
             //console.log(e.target.value);
           tot=pr * Number(e.target.value)

           document.getElementById("tot_price").value
           = tot
       }

 }
 check_choice.forEach(item=>{
        item.onchange=fn;
 });














