const btnEl = document.getElementById('btn');
const navMenuEl = document.getElementById('navMenu');

btnEl.addEventListener('click', ()=>{
    
    if( navMenuEl.style.display === 'flex' ){
        navMenuEl.style.display = 'none';
    }
    else {
        navMenuEl.style.display = 'flex';
    }

})