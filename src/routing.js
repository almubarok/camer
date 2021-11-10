import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/index";
import Category from "./pages/category";
import Detail from "./pages/detail";
import NotFound from "./pages/notfound";

export default function Routing() {
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
