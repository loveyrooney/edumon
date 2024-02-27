let tab = document.querySelectorAll('.mask a');
//
// console.log(tab);
[...tab].forEach(item=>{
    // console.log(item);
 item.addEventListener("focus", function (event) {
     // console.log(event.target.parentElement);
     let ele = event.target.parentElement;

     ele.style.cssText = 'border: 1px solid #07b53b';
 } );
   item.addEventListener("blur",function (event) {
       let clear = event.target.parentElement;

       clear.style.cssText = '' ;
   })
});