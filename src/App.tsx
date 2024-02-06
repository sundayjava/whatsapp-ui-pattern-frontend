import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Status from "./components/status/Status";
import StatusViewer from "./components/status/StatusViewer";
import SIgnin from "./components/Register/SIgnin";
import Signup from "./components/Register/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/status" element={<Status />} />
        <Route path="/status/:userId" element={<StatusViewer />} />
        <Route path="/signin" element={<SIgnin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
