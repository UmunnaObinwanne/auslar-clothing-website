import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/authenticcation";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
