import { useState } from "react"; 
import searchIcon from "../../images/pesquisarIcon.svg";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import Popup from "./components/popup/Popup"; 
import SendRecommendation from "./components/popup/SendRecommendation/SendRecommendation";

function Main({
  children,
  activeView,
  search,
  onSearchChange,
  onSubmitSearch,
  onChangeView,
  onRecommend,
}) {

  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);

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

            <button type="button" onClick={() => onChangeView("sentRecommendations")}>
              Recomendei
            </button>
            <button type="button" onClick={() => onChangeView("recommended")}>
              Recebidos
            </button>
            <button type="button" onClick={() => onChangeView("about")}>
              Sobre
            </button>
          </nav>

          <Footer />
        </aside>

        <main className="main-content">
          <div className="main-content__panel">{children}</div>

          {activeView === "search" && (
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