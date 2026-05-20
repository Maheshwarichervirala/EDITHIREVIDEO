import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Editors from "./pages/Editors";
import EditorDetail from "./pages/EditorDetail";
import PostJob from "./pages/PostJob";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/editors"    element={<Editors />} />
        <Route path="/editor/:id" element={<EditorDetail />} />
        <Route path="/hire"       element={<PostJob />} />
        <Route path="/login"      element={<Login />} />
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/about"      element={<About />} />
        <Route path="*"           element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;