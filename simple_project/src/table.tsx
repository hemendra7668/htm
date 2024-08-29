import { useEffect, useState } from "react";

const Table = ()=>{

    const [data, setData]= useState([]);
    const [draw,setDraw] = useState(false)
console.log('data',data);

const getdata = async ()=>{
    let response = await fetch("http://127.0.0.1:5000/table");
    const respppp = await response.json();
  
    setData(respppp.foundlist);
}
const edit = (index) => {
    // setSelectedIndex(index);
    setDraw(true);
  };
useEffect(() => {
    getdata();
  }, []); 
return <>


<button onClick={getdata}>Fetch Data</button>
<table>
    <tr>
        <th>id</th>
        <th>email</th>
        <th>username</th>
        <th>passwword</th>
    </tr>
    {data?.map((user, index)=>(
        <tr key={index}>
        <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td><button onClick={()=>{edit(index)}}>edit</button></td>
        </tr>
    ))}
</table>
{draw && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '300px',
                    height: '100vh',
                    backgroundColor: '#fff',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                
                }} >
                <h2>Edit User {selectedIndex + 1}</h2>
                <p>Name: {data[selectedIndex].name}</p>
                <p>Email: {data[selectedIndex].email}</p>
                <p>Password: {data[selectedIndex].password}</p>
                <button onClick={closeDrawer}>Close</button>
              </div>
            )}

</>;

}
export default Table;