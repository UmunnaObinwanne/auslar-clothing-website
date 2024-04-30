import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-page">
      {Object.keys(categoriesMap).map((category) => {
        const products = categoriesMap[category];
        return (
          <CategoryPreview
            key={category}
            title={category}
            products={products}
          />
        );
      })}
    </div>
  );
}
