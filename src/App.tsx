import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserInfoWithLogger } from "./patterns/hoc/logProps";
import { CardWithUserData } from "./patterns/playground/Card";
import { CardWithHook } from "./patterns/playground/CardWithHook";
import {
  nestedObject,
  RecursiveComponent,
} from "./patterns/recursion/Recursive";
import {
  GreenSmallButton,
  RedButton,
} from "./patterns/composition/composition";
import { GreenSmallPartialComponentButton } from "./patterns/composition/partialComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <UserInfoWithLogger test="This is a test" />
      <CardWithUserData />
      <CardWithHook />
      <RecursiveComponent data={nestedObject} />
      <RedButton size={"md"} text={"Hi Red Button"} />
      <GreenSmallButton text={"Hello Green Button"} />
      <GreenSmallPartialComponentButton text={"Hello Green Button"} />
    </>
  );
}

export default App;
