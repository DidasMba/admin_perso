import { Route, Routes } from "react-router-dom";
import PageTitle from "./components/common/PageTitle";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ProtectedPage from "./components/ ProtectedPage";
import Event from "./pages/Event";
import Calendar from "./pages/Calendar";
// import ProfileForm from "./components/profile/ProfileForm";

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
        path="/admin/calendar"
        element={
          <ProtectedPage>
            <PageTitle title="User Profile | Soracert admin" />
            <Calendar />
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
       <Route
        path="/admin/testfive"
        element={
          <>
            <PageTitle title="User Profile | Soracert admin" />
            
            <Profile/>
          </>
        }
      />

{/* <Route
        path="/admin/testsix"
        element={
          <>
            <PageTitle title="User Profile | Soracert admin" />
            
            <ProfileForm/>
          </>
        }
      /> */}
    </Routes>
  );
}

export default App;
