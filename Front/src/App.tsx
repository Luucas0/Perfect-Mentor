import { Routes, Route } from "react-router";
import MainView from "./components/MainView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainView />}></Route>
    </Routes>
  );
}

export default App;
