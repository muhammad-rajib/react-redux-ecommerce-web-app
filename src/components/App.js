import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "../components/pages/Home";
import LoginPage from "./pages/loginPage";
import ProductPage from "../components/pages/PorductPage";
import Cart from "../components/pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/products/:id" element={<ProductPage />}></Route>
              <Route path="/cart">
                <Route index element={<Cart />} />
                <Route path=":id" element={<Cart />} />
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
