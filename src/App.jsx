import { useState } from "react";
import Main from "./components/main/Main";
import PanelSearch from "./components/main/components/panels/PanelSearch";

function App() {
  const [activeView, setActiveView] = useState("search");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("fight club");
  const [popup, setPopup] = useState(null);

  const handleOpenPopup = (popupData) => setPopup(popupData);
  const handleClosePopup = () => setPopup(null);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setQuery(search.trim());
    setActiveView("search");
  };

  const handleRecommend = () => {
    handleClosePopup();
  };

  const renderPanel = () => {
    switch (activeView) {
      case "search":
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
      onOpenPopup={handleOpenPopup}
      onClosePopup={handleClosePopup}
      popup={popup}
    >
      {renderPanel()}
    </Main>
  );
}

export default App;