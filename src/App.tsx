import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import HealthCheck from "./routes/HealthCheck";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<HealthCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
