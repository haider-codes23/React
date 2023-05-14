// import Message Object from message.tsx module
// import Message from "./Message";

// import ListGroup component from ListGroup.tsx
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alerts";
import Button from "./assets/components/Button";
import { useEffect, useRef, useState } from "react";
import Form from "./assets/components/Form";
import ProductList from "./assets/components/ProductList";
import axios, { AxiosError } from 'axios';
// import './App.css';

// function App() {
//   return <div><Message></Message></div>;
// }

// Just like the Message Component we should export the App Component as a default ojbect
// export default App;

// {/*<ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup>*/}
// {/*<Alert>Hello World!</Alert>*/}
// let items = ["New York", "San francisco", "Tokyo", "London", "Paris"];
// const handleSelectItem = (item: string) => console.log(item);
// <div><Button color="secondary" onClick={() => console.log('Clicked')}>My Button</Button></div>;
// {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert Me</Alert>}
// <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
// <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup>

//const [alertVisible, setAlertVisibility] = useState(false);

interface User {
  id: number,
  name: string,
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {

    
    const fetchUsers =  async() => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      }
      catch (err) {
        setError((err as AxiosError).message);
      }
    }
    fetchUsers();
    // .then((Response) => setUsers(Response.data))
    // .catch(err => setError(err.message));
  }, [])
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
    );
}

export default App;












// const connect = () => {console.log("Connecting to the server");}
// const disConnect = () => {console.log("Disconnecting from the server");}

// function App() {
//   useEffect(() => {
//     connect();

//     return () => {disConnect();}
//   })

//   return (
//     <div>
      
//     </div>
//     );
// }

// export default App;

















// function App() {
//   const [category, setCategory] = useState('');

//   return (
//     <div>
//       <select className="form-select" name="" id="" onChange={(event) => setCategory(event.target.value)}>
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
        
//       </select>
//       <ProductList category={category}></ProductList>

//     </div>
//     );
// }

// export default App;

















// function App() {
//   const ref = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (ref.current) {ref.current.focus();}
//   });


//   return (
//     <input type="text" ref={ref} className="form-control" />
//     );
// }

// export default App;