import logoBlue from "../../images/logoWhite.svg";
import profileIcon from "../../images/profileIcon.png";

function Header() {
  return (
    <header className="header">
      <div className="header__content">

        <img 
          src={logoBlue} 
          alt="PlotPass logo" 
          className="header__logo" 
        />

        <div className="header__profile">
          <button className="header__profile-button">
            <img 
              src={profileIcon} 
              alt="Perfil do usuário" 
              className="header__profile-icon"
            />
          </button>

          <ul className="header__profile-menu">
            <li className="header__user-email">
              email@email.com
            </li>
            <li>
              <button className="header__logout-btn">
                Sair
              </button>
            </li>
          </ul>

        </div>

      </div>
    </header>
  );
}

export default Header;