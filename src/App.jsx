import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
