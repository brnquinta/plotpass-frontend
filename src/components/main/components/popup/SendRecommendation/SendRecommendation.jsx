import { useState } from "react";
//import { useContext } from "react";
//import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

function SendRecommendation() {
  //const userContext = useContext(CurrentUserContext)
  const [email, setEmail] = useState("");
  const [recommendation, setRecommendation] = useState("");
  //const { handleSendRecommendationSubmit } = userContext

  const handleSubmit = (event) => {
    event.preventDefault();
    //handleSendRecommendationSubmit({ email, recommendation })
    console.log({ email, recommendation });
  };

  return (
    <form className="form form-recommendation" onSubmit={handleSubmit}>
      <div className="form__input-wrapper">
        <input
          className="form__item form__email"
          placeholder="Email"
          type="email"
          name="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <span className="form__validation form__email-validation"></span>
      </div>

      <div className="form__input-wrapper">
        <textarea
          className="form__item form__recommendation"
          placeholder="Motivo da recomendação"
          minLength="2"
          maxLength="200"
          name="recommendation"
          required
          onChange={(event) => setRecommendation(event.target.value)}
        />
        <span className="form__validation form__recommendation-validation"></span>
      </div>

      <button className="form__button-submit" type="submit">
        Indicar
      </button>
    </form>
  );
}

export default SendRecommendation;