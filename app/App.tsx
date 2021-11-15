import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "containers/Auth";
import Login from "containers/Login/Lazy";
import GlobalStyle from "styles/Global";
import AppStore from "./store";
import "rsuite/dist/rsuite.min.css";

// New Router v6 syntax
const App: React.FC = () => {
  return (
    <AppStore.storeProvider store={AppStore.store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Auth />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </AppStore.storeProvider>
  );
};
export default App;
