import { useState } from "react";
import Main from "./components/main/Main";

// pages/panels (exemplos)
import PanelSearch from "./components/main/components/panels/PanelSearch";


function App() {
  const [activeView, setActiveView] = useState("search");
  const [search, setSearch] = useState("");
const [query, setQuery] = useState("fight club");// query “confirmada” ao apertar buscar

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setQuery(search.trim());
    setActiveView("search");
  };

  const handleRecommend = () => {
    console.log("Recomendar item (filme/série)");
  };

  const renderPanel = () => {
    switch (activeView) {
      case "search":
        return <PanelSearch query={query} />;
      default:
        return <PanelSearch query={query} />;
    }
  };

  return (
    <Main
      activeView={activeView}
      search={search}
      onSearchChange={setSearch}
      onSubmitSearch={handleSubmitSearch}
      onChangeView={setActiveView}
      onRecommend={handleRecommend}
    >
      {renderPanel()}
    </Main>
  );
}

export default App;