import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ITBA from "./pages/ITBA";
import Prices from "./pages/Prices";
import MyNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/itba" element={<ITBA />} />
            <Route exact path="/prices" element={<Prices />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
