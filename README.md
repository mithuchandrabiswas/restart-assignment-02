# React Basic Concepts

This README explains some important React concepts: JSX, State vs Props, useState Hook, sharing state between components, and event handling.

---

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. React uses JSX to describe what the UI should look like.
### Why JSX is used
* Makes UI code easier to read and write
* Allows combining HTML with JavaScript logic
* Helps React create UI elements efficiently
* Improves developer productivity

JSX is converted into normal JavaScript using tools like **Babel** before it runs in the browser.


## 2. What is the difference between State and Props?

| Feature    | State                                    | Props                                                |
| ---------- | ---------------------------------------- | ---------------------------------------------------- |
| Definition | State is data managed inside a component | Props are data passed from parent to child component |
| Mutability | State can be changed                     | Props are read-only                                  |
| Control    | Controlled by the component itself       | Controlled by the parent component                   |
| Purpose    | Used for dynamic data                    | Used for passing data                                |


## 3. What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage state.

### Syntax
* const [state, setState] = useState(initialValue);

* **state** → current value
* **setState** → function used to update the state
* **initialValue** → starting value


## 4. How can you share state between components in React?
State can be shared using **Lifting State Up**. This means moving the state to the nearest common parent component and passing it down to child components using props.

## Other ways to share state:

* Context API
* Redux
* Zustand
* Custom Hooks

## 5. How is event handling done in React?

React handles events using **camelCase syntax** and JavaScript functions.

### Example

```jsx
function Button() {
  function handleClick() {
    alert("Button Clicked");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

### Common React Events

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseOver`
* `onKeyDown`

