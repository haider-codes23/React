// import Message Object from message.tsx module
// import Message from "./Message";

// import ListGroup component from ListGroup.tsx
import ListGroup from "./assets/components/ListGroup";
import Alert from "./assets/components/Alerts";
import Button from "./assets/components/Button";
import { useState } from "react";
// import './App.css';

// function App() {
//   return <div><Message></Message></div>;
// }

// Just like the Message Component we should export the App Component as a default ojbect
// export default App;

// {/*<ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup>*/}
// {/*<Alert>Hello World!</Alert>*/}

function App() {
  let items = ["New York", "San francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => console.log(item);
  // <div><Button color="secondary" onClick={() => console.log('Clicked')}>My Button</Button></div>;
  // {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert Me</Alert>}
  // <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>

  //const [alertVisible, setAlertVisibility] = useState(false);

   return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup>
    </div>
    );
}

export default App;