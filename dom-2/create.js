

// let div = document.createElement("div");
// div.id= "content"
// div.className ="myclass"
// div.innerHTML = '<P>This is p tag</P>'
// document.body.appendChild(div)


// let div = document.createElement("div");
// div.id= "content"
// div.className ="myclass"
// let text = document.createTextNode("Hay,jonnor programmer");

// div.appendChild(text)
// document.body.appendChild(div)




// let div = document.createElement("div");
// div.id= "content"
// div.className ="myclass"
// let h1 = document.createElement("h1");
// h1.innerHTML = 'This is h1 tag'

// div.appendChild(h1)
// document.body.appendChild(div)



// let ul = document.createElement("ul");
// let li = document.createElement("li")
// li = document.createElement("li")
// li.textContent = 'singup'
// ul.appendChild(li)
  
// li = document.createElement("li")
// li.textContent = 'login'
// ul.appendChild(li)

// document.body.appendChild(ul);



let firstList = document.querySelector("#first-list");
let listList = document.querySelector("#second-list");

let firstItem = firstList.lastElementChild

listList.appendChild(firstItem)