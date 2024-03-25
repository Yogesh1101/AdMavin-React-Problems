import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import BucketList from "./components/Problem-1/BucketList";
import NestedList from "./components/Problem-2/NestedList";
import WelcomePage from "./components/WelcomePage";
import InfiniteScroll from "./components/Problem-3/InfiniteScroll";
import HitGame from "./components/Problem-4/HitGame";
import BoxSplit from "./components/Problem-5/BoxSplit";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="btn-main-page">
        <button onClick={() => navigate("/problem-1")}>
          1 - Element Transfer
        </button>
        <button onClick={() => navigate("/problem-2")}>2 - Nested List</button>
        <button onClick={() => navigate("/problem-3")}>
          3 - Infinite Scroll
        </button>
        <button onClick={() => navigate("/problem-4")}>4 - Game</button>
        <button onClick={() => navigate("/problem-5")}>5 - Box Split</button>
      </div>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/problem-1" element={<BucketList />}></Route>
        <Route path="/problem-2" element={<NestedList />}></Route>
        <Route path="/problem-3" element={<InfiniteScroll />}></Route>
        <Route path="/problem-4" element={<HitGame />}></Route>
        <Route path="/problem-5" element={<BoxSplit />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
