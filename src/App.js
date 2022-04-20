import HeaderComponent from "./assets/components/header/Header.component";
import { BrowserRouter as Router } from "react-router-dom";
import IndexComponent from "./assets/components/Index.Component";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <IndexComponent />
      </Router>
    </div>
  );
}

export default App;
