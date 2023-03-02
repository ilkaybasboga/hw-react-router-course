import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Path from "./pages/Path";
import PersonDetail from "./pages/PersonDetail";
import Fullstack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import ReactJS from "./pages/ReactJS";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
          <Route path="/path" element={<Path />}>
            <Route path="fullstack" element={<Fullstack />}>
              <Route path="" element={<ReactJS />} />
            </Route>
            <Route path="" element={<Aws />} />
          </Route>

          <Route path="/contact" element={<PrivateRouter/>}>
            <Route path="" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
