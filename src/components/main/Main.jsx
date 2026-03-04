import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import searchIcon from "../../images/pesquisarIcon.svg";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import Popup from "./components/popup/Popup";
import SendRecommendation from "./components/popup/SendRecommendation/SendRecommendation";

function Main({ children, search, onSearchChange, onSubmitSearch }) {
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);

  const location = useLocation(); 
  const isSearchRoute = location.pathname === "/"; 
  return (
    <>
      <Header />

      <div className="layout">
        <aside className="sidebar">
          <nav className="sidebar__menu">
            <form className="sidebar__search-form" onSubmit={onSubmitSearch}>
              <input
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="sidebar__search"
              />
              <button type="submit" className="sidebar__search-button">
                <img src={searchIcon} alt="Ícone de pesquisa" />
              </button>
            </form>

            {/* ALTERADO: Invés de usar o caseSwitch alterei para navegate*/}
            <NavLink to="/sent" className={({ isActive }) => (isActive ? "is-active" : "")}>
              Recomendei
            </NavLink>

            <NavLink to="/recommended" className={({ isActive }) => (isActive ? "is-active" : "")}>
              Recebidos
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? "is-active" : "")}>
              Sobre
            </NavLink>
          </nav>

          <Footer />
        </aside>

        <main className="main-content">
          <div className="main-content__panel">{children}</div>

          {/* regra baseada na rota atual */}
          {isSearchRoute && (
            <div className="main-content__actions">
              <button
                className="recommend-button"
                onClick={() => setIsRecommendationOpen(true)}
              >
                Recomendar
              </button>
            </div>
          )}
        </main>
      </div>

      {isRecommendationOpen && (
        <Popup title="Indique esse filme" onClose={() => setIsRecommendationOpen(false)}>
          <SendRecommendation />
        </Popup>
      )}
    </>
  );
}

export default Main;