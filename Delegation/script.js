
let menu = document.getElementById("menu");

menu.addEventListener("click",(even)=>{
    let target = even.target;

    switch(target.id){
        case 'home':
        console.log("Home page clicked");
            break;

        case 'dashboard':
        console.log("dashboard page clicked");
            break;

        case 'report':
        console.log("report page clicked");
            break;
    }
})