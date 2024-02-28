const tablist = document.querySelectorAll('.tab_menu.list li');
const contents=document.querySelectorAll('.tab_menu.cont_area1.cont')
let activeCont='';

for (let i=0; i < tablist.length; i++){
 tablist[i].querySelector('.btn').addEventListener('click', function (e){
     e.preventDefault();
     for (let j=0; j< tablist.length; j++){
         tablist[j].classList.remove('is_on');
         contents[j].style.display='none';
     }

     this.parentNode.classList.add('is_on');
     activeCont=this.getAttribute('href');
     document.querySelector(activeCont).style.display='block';
 });

}