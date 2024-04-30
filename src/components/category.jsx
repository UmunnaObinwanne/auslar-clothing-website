import "./directory.styles.scss";

import { useNavigate } from "react-router-dom/dist";

export default function Category({ title, imageUrl, route }) {
  const navigate = useNavigate();

  function onNavigateHandler() {
    navigate(route);
  }
  return (
    <div className="directory-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
