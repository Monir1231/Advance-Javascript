//   function myfun(a,s,d,...args){
//     console.log(a,s,d)
//   }

//   myfun(1,2,3)


  function mynum(...args){
    let total = 0
    for (let i of args){
      total += i
    }
    return total;
  }


  let sum =   mynum(1,2,3);
  console.log(sum);

