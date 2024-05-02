import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SocialLoginPage from "./pages/SocialLoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SocialLoginPage />} />
          <Route path="/login/oauth2/callback/kakao" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
