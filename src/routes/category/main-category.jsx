import "./main-category.styles.scss";

import { useParams } from "react-router-dom/dist";

import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

export default function MainCategory() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <div className="single-category-title">
        <h2>{category.toUpperCase()}</h2>
      </div>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
