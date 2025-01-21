import { Route, Routes } from "react-router-dom";
import Home from "../Page/Client/Home/Home";
const PathRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default PathRouter;
