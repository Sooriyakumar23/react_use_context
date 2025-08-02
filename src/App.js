import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./components/Form.jsx";
import Result from "./components/Result.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
