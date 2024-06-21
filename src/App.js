import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import HowToPlay from "./pages/HowToPlay/HowToPlay";
import Categories from "./pages/Categories/Categories";
import InGame from "./pages/InGame/InGame";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/in-game/:slug" element={<InGame />} /> */}
          <Route path="/in-game" element={<InGame />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
