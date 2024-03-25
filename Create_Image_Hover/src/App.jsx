import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageHover from "./ImageHover";

function App() {
  const [count, setCount] = useState(0);

  return <ImageHover />;
}

export default App;
