import './App.css';
import { useCallback, useMemo, useState } from "react";
import Todos from './Components/ToDo';
import Card from './Components/Card';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  
  const increment = () => {
    console.log('increment');
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  },[todos])

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <Card/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
export default App;
