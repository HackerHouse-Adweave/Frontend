import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import Adweave from "./pages/homePage";
import Upload from "./pages/upload";
import Profile from "./pages/profile";
import VideoPlayer from "./pages/videoplayer";
import Sponsor from "./pages/sponsor";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Adweave/>}/>
        <Route path={"/upload"} element={<Upload/>}/>
        <Route path={"/sponsor"} element={<Sponsor/>}/>
        <Route path={"/profile"} element={<Profile/>}/>
        <Route path={"/videoPlayer/:address"} element={<VideoPlayer/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
