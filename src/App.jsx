import Progress from "./Progress";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const[success,setSuccess]=useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + .1);
    }, 40);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <Progress value={value} 
        onComplete={()=>setSuccess(true)}
      />
      <span>{success?"Completed!":"Loading..."}</span>
    </div>
  );
}

export default App;
