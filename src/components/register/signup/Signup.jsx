import Register from "../Register";


function Signup() {
  return (
    <Register>
      <div className="signup">
        <form className="signup__form form form_type_signup">
          <div className="signup__input-wrapper form__input-wrapper">
            <input
              className="signup__input form__item form__name"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <span className="form__validation form__name-validation"></span>
          </div>

          <div className="signup__input-wrapper form__input-wrapper">
            <input
              className="signup__input form__item form__email"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <span className="form__validation form__email-validation"></span>
          </div>

          <div className="signup__input-wrapper form__input-wrapper">
            <input
              className="signup__input form__item form__password"
              placeholder="Password"
              type="password"
              name="password"
              required
            />
            <span className="form__validation form__password-validation"></span>
          </div>

          <button className="signup__submit-button form__submit-button" type="submit">
            Create account
          </button>
        </form>
      </div>
    </Register>
  );
}

export default Signup;