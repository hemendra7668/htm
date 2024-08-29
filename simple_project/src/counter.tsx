import { useMemo, useState } from "react";

 const Counter = ()=>{
const [num, setCount] = useState(0);
const samplearray = [1,3,5,6,64,2];
const calculatevalue= useMemo(()=>{
     let count = 0;
    samplearray.map((item),  => {
    count = count + item; });
    return count;
    },  [samplearray]);

    console.log(calculatevalue)
// const [load, setload] = useState(0);
 return(
    <> hiii
{/* <button   onClick={ ()=> Counter }  >{prop.label} hello</button> */}
</>
);
}
export  default Counter;
