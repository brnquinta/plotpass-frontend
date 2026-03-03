import searchIcon from "../../images/pesquisarIcon.svg";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Main({
  children,
  activeView,
  search,
  onSearchChange,
  onSubmitSearch,
  onChangeView,
  onRecommend,
}) {
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

            <button type="button" onClick={() => onChangeView("indications")}>
              Indicações
            </button>
            <button type="button" onClick={() => onChangeView("recommended")}>
              Indicados
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
              <button className="recommend-button" onClick={onRecommend}>
                Recomendar
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Main;