import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import searchIcon from "../../images/pesquisarIcon.svg";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import Popup from "./components/popup/Popup";
import SendRecommendation from "./components/popup/SendRecommendation/SendRecommendation";

import SearchAutocomplete from "./components/searchAutocomplete/SearchAutocomplete";


function Main({ children, search, onSearchChange }) { // REMOVIDO onSubmitSearch
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);

  const location = useLocation();
  const isSearchRoute = location.pathname === "/";

  return (
    <>
      <Header />

      <div className="layout">
        <aside className="sidebar">
          <nav className="sidebar__menu">

            {/* REMOVIDO onSubmitSearch e transformado em autocomplete */}
        <div className="sidebar__search-form">
  <div className="sidebar__search-wrapper">
    <SearchAutocomplete
      value={search}
      onChange={onSearchChange}
      onSelect={(movie) => console.log("Filme selecionado:", movie)}
    />
  </div>

  <button type="button" className="sidebar__search-button">
    <img src={searchIcon} alt="Ícone de pesquisa" />
  </button>
</div>

            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Início
            </NavLink>

            <NavLink
              to="/sent"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Recomendei
            </NavLink>

            <NavLink
              to="/recommended"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Recebidos
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Sobre
            </NavLink>
          </nav>

          <Footer />
        </aside>

        <main className="main-content">
          <div className="main-content__panel">{children}</div>

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
        <Popup
          title="Indique esse filme"
          onClose={() => setIsRecommendationOpen(false)}
        >
          <SendRecommendation />
        </Popup>
      )}
    </>
  );
}

export default Main;