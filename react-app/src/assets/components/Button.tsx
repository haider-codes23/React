interface props {
  children: string;
  onClick: () => void;
  color: string;
}

const Button = ({children, onClick, color}: props) => {
  return (
    <div>
      <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    </div>);
}

export default Button;

// - First step is creating a new component called Button inside Button.tsx. Then inside a div we use button element and give the button element className attributes borrowed from bootstrap button classes. Then export this Button Component as a default Object.
// - Then go to App.tsx and in the App component add the Button component but first import Button from components folder.
// - Now we need to make our label text dynamic. So we need to define an interface to shape of the properties. Now here we use children property and it’s type is string. We can also use reactNode. Next we add the props parameter and de-structure it and finally we render children in the place of label.
// - Now we go to our App component and give this button a label like My Button
// - Next we need to handle the click event, when this button is clicked we have to do something, what happens next should not be implemented inside our button component otherwise it wont be reusable. So in our Button component we are going to add a new property to our prop object called onClick, this is going to be a function with no parameters that returns void. Next we add onClick to the parameters and finally we add the onClick property to button element and set it to the function that is passed from the outside. So onClick is a function that is passed from the outside. so the parent of this component is going to pass that button, we get that function and simply pass it to this HTML button. Now in our App component we have an error because we haven’t set the onclick property in our button component. For now we will add a simple inline function and log clicked on the console.
// - Now the final step is implementing the color. So we want to pass the color from the outside e.g. in the Button component we would add a new property called color and set it a static string value e.g. “primary”. Then in our Button.tsx in the Button Component we add the second css class dynamically to btn-