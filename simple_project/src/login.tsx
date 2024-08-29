import { useContext, useState } from 'react';
import { titlecontext } from './home';
const Login = ()=>
    {
    const [username, setUsername] = useState('');  
    const [password, setPassword] = useState('');  
    const title = useContext(titlecontext);
  const handleSubmit = () => {  
    // e.preventDefault();  
    console.log('Username:', username);  
    console.log('Password:', password);  
    // Add authentication logic here  
  };  
    return (
        <> 
        {title}

 
    <form onSubmit={handleSubmit}>  
      <div>  
        <label>  
          Username:  
          <input  
            type="text"  
            value={username}  
            onChange={(e) => setUsername(e.target.value)}  
            required  
          />  
        </label>  
      </div>  
      <div>  
        <label>  
          Password:  
          <input  
            type="password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            required  
          />  
        </label>  
      </div>  
      <button type="submit" onClick={  ()=> {handleSubmit}}>Login</button>  
    </form>  
  
        </>
    );
    }
     export default Login;