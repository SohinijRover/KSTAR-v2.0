import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Music from "./pages/Music";
import Dance from "./pages/Dance";
import Painting from "./pages/Painting";
import Acting from "./pages/Acting";
import Design from "./pages/Design";
import Snapshot from "./pages/Snapshot";
import Writing from "./pages/Writing";
import Marketing from "./pages/Marketing";
import ShortFilm from "./pages/ShortFilm";
import Fashion from "./pages/Fashion";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#AC1D39_0%,#3A130E_100%)] h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/design" element={<Design />} />
          <Route path="/snapshot" element={<Snapshot />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/short-film" element={<ShortFilm />} />
          <Route path="/fashion" element={<Fashion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
