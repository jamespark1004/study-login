import { Route, Routes } from "react-router-dom";
import LoginTemplete from "./components/LoginTemplete";
import JoinTemplete from "./components/JoinTemplete";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Boards from "./components/Boards";
import Articles from "./components/Articles";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Categories />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<LoginTemplete />} />
      <Route path="/join" element={<JoinTemplete />} />
      <Route path="/boards" element={<Boards />}></Route>
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
};

export default App;
