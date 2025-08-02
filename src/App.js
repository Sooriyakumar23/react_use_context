import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Form from "./components/Form.jsx";
import Result from "./components/Result.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <span style={{ margin: "50px", fontSize: "30px" }}>
          <Link to="/">FORM</Link>
        </span>
        <span style={{ margin: "50px", fontSize: "30px" }}>
          <Link to="/result">RESULT</Link>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
