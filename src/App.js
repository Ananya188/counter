import React from "react";
import "./style.css";

export default function App() {
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
