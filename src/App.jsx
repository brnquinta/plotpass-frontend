import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Main from "./components/main/Main";
import PanelSearch from "./components/main/components/panels/PanelSearch";
import RecommendationsPanel from "./components/main/components/panels/RecommendationsPanel";
import SentRecommendationsPanel from "./components/main/components/panels/SentRecommendationsPanel";
import AboutPanel from "./components/main/components/panels/AboutPanel";

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
    <Main
      search={search}
      onSearchChange={setSearch}
      onSubmitSearch={handleSubmitSearch}
    >
      {/* renderização do painel agora é por rotas */}
      <Routes>
        <Route path="/" element={<PanelSearch query={query} />} />
        <Route path="/recommended" element={<RecommendationsPanel />} />
        <Route path="/sent" element={<SentRecommendationsPanel />} />
        <Route path="/about" element={<AboutPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    </Main>
  );
}

export default App;