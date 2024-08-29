import { useRef } from "react";

const UseRef = ()=>{
const counterref = useRef(0);

const handlecount = ()=>{
    counterref.current++;
    console.log(counterref.current);
    
}



console.log("the outside block:",counterref.current);

    return (
        <>

        the count is because of use ref : {counterref.current}

        please check the console, if you want to get a clear idea about the difference between the use state 
        </>
    );
}

export default UseRef;