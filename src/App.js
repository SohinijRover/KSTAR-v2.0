import Home from "./pages/Home";

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] h-full w-full">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
