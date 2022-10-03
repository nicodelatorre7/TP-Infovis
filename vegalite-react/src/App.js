import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mode1 from "./pages/Mode1";
import Mode2 from "./pages/Mode2";
import MyNavbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/mode1" element={<Mode1 />} />
            <Route exact path="/mode2" element={<Mode2 />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
