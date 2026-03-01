import logoBlue from "../../images/logoBlue.svg";


function Header() {
  return (
<header>
    <div className="header">
        <div className="header__content">
            <div className="header__content_logo">
                <img src={logoBlue} alt="logo plotpass" className="header__logo" />
        </div>
            <h2>PlotPass</h2>
        </div>
      </div>
</header>
  );
}

export default Header;