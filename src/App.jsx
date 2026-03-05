import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Main from "./components/main/Main";
import PanelSearch from "./components/main/components/panels/PanelSearch";
import RecommendationsPanel from "./components/main/components/panels/RecommendationsPanel";
import SentRecommendationsPanel from "./components/main/components/panels/SentRecommendationsPanel";
import AboutPanel from "./components/main/components/panels/AboutPanel";

import Login from "./components/register/login/Login";
import Signup from "./components/register/signup/Signup";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("fight club");

  const navigate = useNavigate();

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setQuery(search.trim());
    navigate("/");
  };

  return (
    <Routes>
      {/* REGISTER */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* APP */}
      <Route
        path="/"
        element={
          <Main
            search={search}
            onSearchChange={setSearch}
            onSubmitSearch={handleSubmitSearch}
          >
            <PanelSearch query={query} />
          </Main>
        }
      />
      <Route
        path="/recommended"
        element={
          <Main
            search={search}
            onSearchChange={setSearch}
            onSubmitSearch={handleSubmitSearch}
          >
            <RecommendationsPanel />
          </Main>
        }
      />
      <Route
        path="/sent"
        element={
          <Main
            search={search}
            onSearchChange={setSearch}
            onSubmitSearch={handleSubmitSearch}
          >
            <SentRecommendationsPanel />
          </Main>
        }
      />
      <Route
        path="/about"
        element={
          <Main
            search={search}
            onSearchChange={setSearch}
            onSubmitSearch={handleSubmitSearch}
          >
            <AboutPanel />
          </Main>
        }
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;