import './App.css';
import { useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {

  //------------------------ TODO LIST --------------------------
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  //------------------------ ADD COUNT --------------------------
  const [count, setCount] = useState(0);
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }; 
  const increment = () => {
    setCount((c) => c + 1);
  };
  const calculation = useMemo(()=> expensiveCalculation(count),[count]);
  const inputElement = useRef();
  const callIE = ()=>{
    console.log(inputElement.current.value)
  }
  return (
    <>
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        <div>
          ------------------------------------
          <input type="text" ref={inputElement} />
          <button onClick={callIE}>REF</button>
          ------------------------------------
        </div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
    </>
  );
};
export default App;
