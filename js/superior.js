const mytabs=document.querySelectorAll('.tabItem');
const tabpanels=document.querySelectorAll('.tabpanel');

const init=function(){
    let initli=mytabs[0].firstElementChild;
    let initA=initli.parentElement.getAttribute('aria-controls');
    initli.classList.add('bgpanel');
    initli.focus();
    let initId=document.getElementById(initA);
    initId.classList.add('visit');
}

init();

mytabs.forEach(item=>{
    item.firstElementChild.addEventListener('focus', function(e){
        e.preventDefault();

        for(let i=0; i<mytabs.length; i++)
        {
            mytabs[i].firstElementChild.classList.remove('bgpanel');
        }

        for(let i=0; i<tabpanels.length; i++)
        {
            tabpanels[i].classList.remove('visit');
        }
        e.target.classList.add('bgpanel');
        let data=e.target.parentElement.getAttribute('aria-controls');

        console.log(data);

        if(data==null)
            data='tabpanel-1';
        document.getElementById(data).classList.add('visit');

    });


})