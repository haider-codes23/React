// import Message Object from message.tsx module
// import Message from "./Message";

// import ListGroup component from ListGroup.tsx
import ListGroup from "./assets/components/ListGroup";

// function App() {
//   return <div><Message></Message></div>;
// }

// Just like the Message Component we should export the App Component as a default ojbect
// export default App;

function App() {
  let items = ["New York", "San francisco", "Tokyo", "London", "Paris"];

  return <div>
            <ListGroup items={items} heading={"Cities"}></ListGroup>
          </div>;
}

export default App;