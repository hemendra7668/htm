import { useNavigate } from "react-router-dom";
import Login from "./login";
import { createContext, useContext, useState } from "react";
export const titlecontext = createContext('');
const Home = ()=>
{
    const [title, settitle] = useState("hello , gla ")
    const navigate = useNavigate();

return (
    <> 
    <h1>
        hii this is the home page

        </h1>
        {/* <button onClick={ ()=>navigate('/Login') }>login</button> */}
<titlecontext.Provider value={title}>

{/* <Home/> */}
<Login/>

</titlecontext.Provider>

        {/* <button onClick={ ()=>useNavigate('/Login') }>login</button> */}
    </>
);
}
 export default Home;
//  export default Home();

 