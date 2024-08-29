// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from 'react';
// import Counter from './counter.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home.tsx';
import Login from './login.tsx';
import Login2 from './newlogin.tsx';
import Register from './Register.tsx';
import Table from './table.tsx';
import UseRef from './useRef.tsx';
function App() {
// const testobject = {
//   studentname : "hemendra kumar",
//   dpartnmae: "cse",
//   marks: {
//     js:{
//       total: 85
//     },
//     maths:{
//       total: 85
//     },
//     eng:{
//       total: 85
//     },
//     react:{
//       total: 85
//     }
//   }
// }

const [num, setCount] = useState(0);
const [multiply, setmultiply] = useState(1);
// const [load, setload] = useState(1);
// const {testobject}= prop;
// console.log(prop);
// console.log(testobject);

// let count =0;
const clicked =()=>{
  // num+= 1;
  setCount(num+1);
  setmultiply(multiply *2);
  console.log(num);
  }
  const setload = ()=>
  {
    // setTimeout(100):{
    //   let load = false;
    // };

  };
  return (
   
   

<BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
    <Route path="/useref" element={<UseRef/>}/>
    <Route path="/login2" element={<Login2/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/table" element={<Table/>}/>
  </Routes>
</BrowserRouter>

  )
}

export default App
