//import fragments
import { Fragment } from "react";
function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second Item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">A fifth Item</li>
      </ul>
    </Fragment>
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