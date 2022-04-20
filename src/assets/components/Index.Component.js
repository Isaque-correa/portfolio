import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomeComponent from "./home-components/home.component";
import AboutComponent from "./about-components/about.component";
import PortfolioComponent from "./portfolio-components/Portfolio.component";
import {TransitionGroup, CSSTransition} from "react-transition-group";
function IndexComponent() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500}>
        <Routes location={location}>
          <Route path="/portfolio"  element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/skill" element={<PortfolioComponent />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default IndexComponent;
