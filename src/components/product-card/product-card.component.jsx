import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import "./product.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/dropdown.context";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <Card sx={{ width: 320 }} className="product-card-container">
      <div>
        <Typography level="title-lg">{name}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            position: "absolute",
            top: "0.875rem",
            right: "0.5rem",
          }}></IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={imageUrl} alt={`${name}`} loading="lazy" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {price}
          </Typography>
        </div>
        <Button
          onClick={addProductToCart}
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}>
          Shop Now
        </Button>
      </CardContent>
    </Card>
  );
}
