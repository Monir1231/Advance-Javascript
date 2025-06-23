
let control=document.querySelector("#control");
let scrollLeft = document.querySelector("#btnScrollLeft")
let scrollTop = document.querySelector("#btnScrollTop")
let div = document.getElementById('scrollDemo');



control.addEventListener("click",(e)=>{

    let target = e.target;

    switch(target.id){
        case 'btnScrollLeft':
            div.scrollLeft += 20
            break;

            case 'btnScrollTop':
                div.scrollTop += 20
                break;
        
    }
})