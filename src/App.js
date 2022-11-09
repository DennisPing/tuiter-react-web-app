import Labs from "./labs";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container py-2">
        <Routes>
          {/* <Route index element={<Labs />} /> */}
          <Route path="/*" element={<Labs />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
