// addition=(a,b)=> {
//     return a+b;
// }

// const val = addition(2,3);
//  console.log(val);

// // addition = (input)=> {
// // return `i m studying in ${object.namee}`;

// // };
// object = {
// namee:"hey",dept:"cse", avatar:"kk"
// }
// const variable  = addition(object);
// console.log(variable)

// dosomething= (value, callback)=>{
//     var data = callback(value['a'], value['b']);
//      return data;
// }

//  const variable1 = dosomething({a:1, b:2}, addition())
//  console.log(variable1);

var count = 0;
dosomething = (value = []) => {
  count += 1;
  console.log(`the counter is increased to,${count}`);

  if (count == 5) {
    return console.log("maximum limit exceeds");
  }
  if (value.length === 0) {
    return console.log("the values are ", value.length);
  }
  if (value.length != 2) {
    return dosomething([1]);
  }
  // console.log("the values are ", value.length);
  return {
    val: value,
    length: value.length,
  };
};

// var var2 = dosomething([1,2,3,4])
// console.log(var2);

const getdata = async () => {
  let data = await fetch("https://catfact.ninja/fact");
  //   let data = await fetch("https://dog.ceo/api/breeds/image/random");
  data = await data.json();
  const atag = document.createElement("div");
  // atag.setAttribute('',element.fact)
  // atag.setAttribute('height','100px')
  // atag.setAttribute('width','100px')
  atag.textContent = data.fact;
  document.body.appendChild(atag);
  console.log(data);

  return data;
};

// getdata();
console.log(true + true + true);
console.log(false - false - false);
console.log(0.5 + 0.3);
// console.log(var3);
