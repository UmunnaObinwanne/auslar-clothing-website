import { Routes, Route } from "react-router-dom/dist";

import CategoriesPreview from "../categories-preview/categories-preview";

import MainCategory from "../category/main-category";

import "./shop.styles.scss";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<MainCategory />} />
    </Routes>
  );
}
