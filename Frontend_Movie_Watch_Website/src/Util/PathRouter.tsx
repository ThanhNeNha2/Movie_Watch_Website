import { Route, Routes } from "react-router-dom";
import Home from "../Page/Client/Home/Home";
import DetailMovies from "../Page/Client/DetailMovies/DetailMovies";
const PathRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detailmovies" element={<DetailMovies />} />
    </Routes>
  );
};

export default PathRouter;
