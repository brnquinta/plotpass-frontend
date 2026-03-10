import Register from "../Register";


function Login() {
  return (
    <Register>
      <div className="login">
        <form className="login__form form form_type_login">
          <div className="login__input-wrapper form__input-wrapper">
            <input
              className="login__input form__item form__email"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <span className="form__validation form__email-validation"></span>
          </div>

          <div className="login__input-wrapper form__input-wrapper">
            <input
              className="login__input form__item form__password"
              placeholder="Password"
              type="password"
              name="password"
              required
            />
            <span className="form__validation form__password-validation"></span>
          </div>

          <button className="login__submit-button form__submit-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </Register>
  );
}

export default Login;