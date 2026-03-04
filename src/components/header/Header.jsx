import { useNavigate } from "react-router-dom";

import logoBlue from "../../images/logoBlue.svg";
import profileIcon from "../../images/profileIcon.png";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__content">
        <img src={logoBlue} alt="PlotPass logo" className="header__logo" />

        <div className="header__profile">
          <button className="header__profile-button" type="button">
            <img
              src={profileIcon}
              alt="Perfil do usuário"
              className="header__profile-icon"
            />
          </button>

          <ul className="header__profile-menu">
            <li className="header__user-email">email@email.com</li>

            <li>
              <button
                className="header__logout-btn"
                type="button"
                onClick={handleLogout}
              >
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