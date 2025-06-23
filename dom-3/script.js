
// let mydiv = document.querySelector(".mydiv")

// let h2 = document.createElement("h2")
// h2.innerText = 'this is my tag'

// mydiv.after(h2)


// append 

// let app = document.getElementById("app");

// let langs = ["python","java","Rust","c","c#","javascript"];

// let node = langs.map((prolang)=>{
//     let li = document.createElement("li");
//     li.innerText = prolang
//     return li
// })

// app.append(...node)

// let app = document.getElementById("app");

// let langs = ["python","java","Rust","c","c#","javascript"];

// let node = langs.map((prolang)=>{
//     let li = document.createElement("li");
//     li.innerText = prolang
//     return li
// })

// app.prepend(...node)





// JavaScript replaceChild() Method

// let menu = document.getElementById("menu");

// let li =document.createElement("li");
// li.innerText = "Home"

// menu.replaceChild(li,menu.lastElementChild)



//  javaScript insertAdjacentHTML() Method bangla 


let list = document.querySelector('#list');

         list.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>');
         list.insertAdjacentHTML('afterbegin', '<li>HTML</li>');
         list.insertAdjacentHTML('beforeend', '<li>JavaScript</li>');
         list.insertAdjacentHTML('afterend', '<p>For frontend developers</p>');