import BlogApp from "./main/BlogApp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BlogApp />
    </BrowserRouter>
  );
}

export default App;
