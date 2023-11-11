import { useEffect, useState } from "react";

/*function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
export default App;


//Output : "Component rendered successfully" print one times in console . 
*/

/*import React from "react";
function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name) => <li>{name}</li>);
  return <ul>{listItems}</ul>;
}
export default App;

// Output : "Brian", "Paul", "Krug", "Halley" this 4 value print in brouser.
*/

/*function App() {
  const [value, setValue] = useState("");
 function handleChange(event) {
	setValue(event.target.value);
  }
 
  return (
	<div>
  	<input type="text" value={value} onChange={handleChange} />
  	<p>You entered: {value}</p>
	</div>
  );
}
export default App;
// Output : whatever wrote print the brouser.
*/

/*import React from "react";
function App() {
  var [count, setValue] = useState("");
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
  ];

  setTimeout(() => {
    setValue(count++);
    console.log("outer setTimeout call");
  }, 1);

  const listItems = items.map((item, index) => (
    <li key={index}>{item.text}</li>
  ));
  return (
    <>
      {count}
      <ul>{listItems}</ul>
      <button
        onClick={() => {
          setValue(count++);
          console.log("outer setTimeout call");
        }}
      >
        btn
      </button>
    </>
  );
}
export default App;*/
/*import React, { useMemo } from "react";
 function App() {
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = useMemo(() => numbers.map((n) => n * 2), []);
  console.log(doubledNumbers);
 return (
	<div>
  	{doubledNumbers.map((number) => (
    	<p key={number}>{number}</p>
  	))}
	</div>
  );
}
 
export default App;*/
import React, { useCallback } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
    console.log('hi')
  }, []);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
