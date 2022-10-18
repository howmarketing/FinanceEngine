import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import "./App.scss";
import LoginComponent from "./pages/login/LoginComponent";
import DashboardComponent from "./pages/private/container/dashboard/DashboardComponent";
import PrivateContainer from "./pages/private/PrivateContainer";

const App: React.FC = () => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/health" element={<h1> Aplicação está rodando </h1>} />
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>...</>}>
                <LoginComponent />
              </React.Suspense>
            }
          />
          <Route
            path="/app/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <PrivateContainer />
              </React.Suspense>
            }
          >
            <Route
              path="dashboard"
              element={
                <React.Suspense fallback={<>...</>}>
                  <DashboardComponent />
                </React.Suspense>
              }
            />

            <Route path="*" element={<Navigate to="dashboard"></Navigate>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
