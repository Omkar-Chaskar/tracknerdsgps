import './App.css';
import { Nav, Login, Dashboard} from "./Components";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./Context/authProvider";  

function App() {
  const { user } = useAuth();
  const { loginStatus } = user;

  return (
    <div className="App">
      <Nav />
      <Routes>
        {loginStatus ? (
          <Route path="/" element={<Dashboard />} />
        ):(
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
