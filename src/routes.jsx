import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import LoginPage from "./pages/login/login";
import NotFoundPage from "./pages/notFound/notFound";
import RegPage from "./pages/registration/registration";
import FavoritesPage from "./pages/favorites/favorites";
import CategoriesPage from "./pages/categories/categories";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/categories/:id" element={<CategoriesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
