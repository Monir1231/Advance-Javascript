

let updateContent = ()=>{
    const content = document.querySelector("#content");
    const hash = window.location.hash.substring(1);

    switch(hash){
        case 'home':
            content.innerHTML = "<h1>This is home page</h1>";
             break;

            case 'about':
            content.innerHTML ="<h1>This is about page</h1>";
              break;

            case 'contact':
            content.innerHTML = "<h1>This is contact page</h1>"
              break;
    }

}

window.addEventListener('hashchange', updateContent)