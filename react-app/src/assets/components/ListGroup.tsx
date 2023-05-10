//import fragments
//import { Fragment } from "react";
import { MouseEvent, useState } from "react";

interface props {
  items: string[];
  heading: string;
}
// In the parameter of ListGroup component we are destructuring our props object{props: props}
function ListGroup({items, heading}: props) {
  // let items = ["New York", "San francisco", "Tokyo", "London", "Paris"];

  //items = [];

  // Conditional rendering
  // if (items.length === 0) {
  //   return <><h1>List</h1><p>No items found</p></>;
  // }
  // Rendering List

  // const message = items.length === 0 ? <p>No items found</p> : null;
  const message = items.length === 0 && <p>No items Found</p>;

  //const handleClick = (event: MouseEvent) => {selectedIndex = index};

  //let selectedIndex = 0;
  // state Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// Now if we want to add another element e.g. h1 heading to our ListGroup component, we get a bunch
// of errors, because in react a component cannot return more than one element. To solve this problem
// we have a couple of ways e.g. we can wrap this entire expression inside a div or another element but
// we will be adding one extra element in the DOM, purely for making react happy, this is unnecessary.

// A better way is to use fragment. So on the top we import { fragment } from react.
//  Then replace the div with fragment. So with this change when this component is rendered
//  on the screen, we are not going to have an additional element like a div in the DOM.

// - Now there is a shorter syntax to achieve this, we don’t have to use the fragment keyword if
// we just use the angle brackets and we wont have to import fragments as well then

// function ListGroup() {
//   return (
//     <>
//       <h1>List</h1>
//       <ul className="list-group">
//         <li className="list-group-item">Cras justo odio</li>
//         <li className="list-group-item">Dapibus ac facilisis in</li>
//         <li className="list-group-item">Morbi leo risus</li>
//         <li className="list-group-item">Porta ac consectetur ac</li>
//         <li className="list-group-item">Vestibulum at eros</li>
//       </ul>
//     </>
//   );
// }

// We have hard coded items in our markup, what if we want to render the list if items dynamically.
// Lets declare a const items and set it to an array of strings, we can use names of cities for array
// elements.

// Now in JSX we dont have a for loop so we have to use a different technique. In JS arrays have a
// method called map for mapping or converting each item into an item of a different type. We pass a
// arrow function to the map method and then we convert each item to li element or a list element.
// And inside the tag we want to render or display the item itself, to display the list item we use
// curly braces to render data dynamically. Now instead of the list item in our previous code we are
// going to move this line inside our ul and remove all other li elements, because now we are rendering
// list items dynamically. However we get a compilation error, because expressions are not allowed in
// the middle of JSX markup, in JSX we can only use HTML elements or other react components. So to
// render data dynamically we need to render this expression in braces.

// Now if we inspect this in browser we’d get a warning that each child in the list must have a
// unique id. So in the li element we need to add a key property that uniquely identifies that item.
// In this case each item in the item array is a unique string so we’ll use item itself as unique key.
