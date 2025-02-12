import { Route, Routes } from "react-router-dom";
import PageTitle from "./components/common/PageTitle";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ProtectedPage from "./components/ ProtectedPage";
import Event from "./pages/Event";

function App() {
  return (
    <Routes>
      <Route
        path="/admin/profile"
        element={
          <ProtectedPage>
            <PageTitle title="User Profile | Soracert admin" />
            <Profile />
          </ProtectedPage>
        }
      />
      <Route
        path="/admin/event"
        element={
          <ProtectedPage>
            <PageTitle title="User Profile | Soracert admin" />
            <Event />
          </ProtectedPage>
        }
      />
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Login page | Soracert admin" />
            <SignIn />
          </>
        }
      />
    </Routes>
  );
}

export default App;
