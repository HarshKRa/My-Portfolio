import "./App.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Head from "./Component/Head/Head";
import Hero from "./Component/Home/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Head></Head>
        <Routes>
          <Route path="/" element={<Hero></Hero>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/Contact" element={<Contact></Contact>} />
          <Route path="*" element={<Hero></Hero>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
