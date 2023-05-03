let increment = 0;

let show = document.querySelector('.show')
let cuerpo = document.querySelector('.container')

document.addEventListener('click',(e)=>{
    console.log(e)
    if(e.target.matches('#decrease')){
        increment--
        show.innerHTML = increment
        if(e)
        cuerpo.style.backgroundcolor = 'rgb(66, 218, 7)'
        document.getElementById('img') ='..'
    }
})



    

