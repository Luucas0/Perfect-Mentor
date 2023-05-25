import { Routes, Route } from "react-router";
import MainView from "./components/MainView";
// import SingInForm from "./components/SingInForm";
import SingUpForm from "./components/SingUpForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainView />}></Route>
        <Route path="/SingUp" element={<SingUpForm />}></Route>
        <Route path="/SingIn" element={<SingUpForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
