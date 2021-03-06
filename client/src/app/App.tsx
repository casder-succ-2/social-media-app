import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAturh from "./components/common/requireAturh/RequireAturh";
import Log from "./layouts/register/Log";
import HomePage from "./pages/homePage/HomePage";
import Messanger from "./pages/messanger/Messanger";
import Profile from "./pages/profile/Profile";

const App: FC = () => {
  return (
    <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <RequireAturh>
                <HomePage />
              </RequireAturh>
            }
          />
          <Route path="/login" element={<Log />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/messanger" element={<Messanger />} />
        </Routes>
    </div>
  );
};

export default App;
