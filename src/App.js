import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";

function App() {
  return (
    <div>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/" element={<h1>About</h1>} />
        <Route path="/" element={<h1>Contact</h1>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
