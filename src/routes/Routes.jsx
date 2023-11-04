import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import VotePage from "../pages/VotePage";
import BreedsPage from "../pages/BreedsPage";
import ImageSearchPage from "../pages/ImagesPage";
import FavouritesPage from "../pages/FavouritesPage";
import UploadPage from "../pages/UploadPage";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="vote" element={<VotePage />} />
        <Route path="breeds" element={<BreedsPage />} />
        <Route path="image-search" element={<ImageSearchPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};
