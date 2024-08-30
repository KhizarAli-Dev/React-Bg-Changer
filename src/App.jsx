import { useState } from "react";

import "./App.css";
import Button from "./components/Buttons/Button";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
       
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <Button
              onClick={() => setColor("red")}
              className
              style={{ backgroundColor: "red" }}
              btnText={"Red"}
            />
            <Button
              onClick={() => setColor("green")}
              className
              style={{ backgroundColor: "Green" }}
              btnText={"Green"}
            />
            <Button
              onClick={() => setColor("yellow")}
              className
              style={{ backgroundColor: "yellow" }}
              btnText={"Yellow"}
            />
            <Button
              onClick={() => setColor("blue")}
              className
              style={{ backgroundColor: "blue" }}
              btnText={"Blue"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
