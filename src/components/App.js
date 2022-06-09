import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "../components/pages/Home";
import Footer from "./Footer";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/ProfilePage";

import UserListPage from "../components/pages/UserListPage";
import UserEditPage from "../components/pages/UserEditPage";

import Cart from "../components/pages/Cart";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceholderPage from "./pages/PlaceholderPage";

import OrderPage from "./pages/OrderPage";
import OrderListPage from "./pages/OrderListPage";

import ProductPage from "../components/pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/admin/userlist" element={<UserListPage />} />
              <Route
                path="/admin/user/:id/edit"
                element={<UserEditPage />}
              ></Route>
              <Route path="/admin/productlist" element={<ProductListPage />} />
              <Route path="/admin/orderlist" element={<OrderListPage />} />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditPage />}
              />

              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart">
                <Route index element={<Cart />} />
                <Route path=":id" element={<Cart />} />
              </Route>
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/placeholder" element={<PlaceholderPage />} />
              <Route path="/order/:id" element={<OrderPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
