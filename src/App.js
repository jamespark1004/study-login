import { Route, Routes } from "react-router-dom";
import LoginTemplete from "./components/LoginTemplete";
import JoinTemplete from "./components/JoinTemplete";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginTemplete />} />
      <Route path="/join" element={<JoinTemplete />} />
    </Routes>
  );
};

export default App;
