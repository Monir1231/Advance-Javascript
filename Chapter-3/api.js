

// let data = fetch("https://jsonplaceholder.typicode.com/users");

// data.then((res)=>{
//     return res.json()
// }).then((read)=>{
//     console.log(read[1].name);
// })

async function data() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    const name = await response.json()
    console.log(name[1])
}
data()