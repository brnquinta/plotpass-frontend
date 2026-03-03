import { useState } from "react";
// import Panel from "../components/Panel"; 
import searchIcon from "../../images/pesquisarIcon.svg";
import Footer from "../footer/Footer";


function MainLayout({ children }) {
  const [search, setSearch] = useState("");

  // controla qual "aba" está ativa (sem Router, por enquanto)
  const [activeView, setActiveView] = useState("search"); // "search" | "indications" | "recommended" | "about"

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscar:", search);
    setActiveView("search"); // ao buscar, garante que está em Pesquisar
  };

  const handleRecommend = () => {
    console.log("Recomendar item (filme/série)");
    // no futuro: abrir modal / navegar / setar estado etc.
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <nav className="sidebar__menu">
          <form className="sidebar__search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Pesquisar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sidebar__search"
            />
            <button type="submit" className="sidebar__search-button">
              <img src={searchIcon} alt="Ícone de pesquisa" />
            </button>
          </form>

          <button type="button" onClick={() => setActiveView("indications")}>
            Indicações
          </button>
          <button type="button" onClick={() => setActiveView("recommended")}>
            Indicados
          </button>
          <button type="button" onClick={() => setActiveView("about")}>
            Sobre
          </button>
        </nav>
        <Footer />
      </aside>
      

      <main className="main-content">
        <div className="main-content__panel">
        {children}
        </div>

        {activeView === "search" && (
          <div className="main-content__actions">
            <button className="recommend-button" onClick={handleRecommend}>
              Recomendar
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainLayout;