import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/users";

const components = [];

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="users/:id" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
