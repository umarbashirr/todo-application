import { lazy } from "react";
import { Route, Routes } from "react-router";
const DashboardPage = lazy(() => import("./pages/dashboard"));

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
