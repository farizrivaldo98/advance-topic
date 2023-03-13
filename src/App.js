import { Routes, Route } from "react-router-dom";
import LernHOC from "./pages/LernHOC";

function App() {
  const Button = (props) => <button style={props.style}>Click me</button>;
  const Text = (props) => <text style={props.style}>apapun ini test</text>;

  const StyleButton = LernHOC(Button);
  const StyleText = LernHOC(Text);

  return (
    <div>
      <StyleButton />
      <StyleText />
      <Routes>
        <Route path="/" element={<LernHOC />} />
      </Routes>
      <p>Apapun</p>
    </div>
  );
}

export default App;
