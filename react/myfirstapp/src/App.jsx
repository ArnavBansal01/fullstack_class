import { useState } from "react";
  import "./App.css";
import Form from "./form";
import Context from "./context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>HI BRO</h1>
      <Form />
      <Context />
      
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </> 
  );
}

export default App;
