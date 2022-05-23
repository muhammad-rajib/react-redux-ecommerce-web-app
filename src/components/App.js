import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../components/pages/Home";
import ProductPage from "../components/pages/PorductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
