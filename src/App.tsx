import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import Adweave from "./pages/homePage";
import Upload from "./pages/upload";
import Profile from "./pages/profile";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Adweave/>}/>
        <Route path={"/upload"} element={<Upload/>}/>
        <Route path={"/profile"} element={<Profile/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
