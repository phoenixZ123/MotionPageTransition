import "./App.css";
import { Route, Routes, useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 0.5,
        ease: [0.3, 0, 0.9, 1],
      },
    },
  };
  const InitialTransition = () => {
    return (
      <div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={blackBox}
        ></motion.div>
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <InitialTransition></InitialTransition>
        <Routes>
          <Route path="/" element={<Home />} index></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
