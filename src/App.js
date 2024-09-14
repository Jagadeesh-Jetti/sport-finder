import { Routes, Route } from "react-router";
import { HomePage } from "./components/HomePage/HomePage";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
