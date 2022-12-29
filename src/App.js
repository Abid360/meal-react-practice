import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Header count={count}></Header>
      <Body setCartCount={setCartCount}></Body>
    </div>
  );
}

export default App;
