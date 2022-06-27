import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components";
import { AppRoutes } from "./pages";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          {AppRoutes.map((route, index) => {
            const { path, element } = route;
            return <Route path={path} element={element} key={index} />;
          })}
        </Routes>
      </main>

    </div>
  );
}

export default App;
