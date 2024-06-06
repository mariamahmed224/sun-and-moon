import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import {Gallery}  from "./pages";
  




const App = () => {
  return (
    <main>
     <Router>
      <Routes>{<Route path="/" element={<Home />} />}</Routes>
      <Routes>{<Route path="/book" element={<Book />} />}</Routes>
      <Routes>{<Route path="/gallery" element={<Gallery />} />}</Routes>

      



     </Router>
    </main>
  );
};

export default App;
