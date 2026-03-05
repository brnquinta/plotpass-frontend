import { useState } from "react";

function SentRecommendationsPanel() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      toUserEmail: "ana@email.com",
      reason:
        "Clube da Luta chama atenção pela narrativa provocadora, personagens marcantes e reviravoltas.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 2,
      toUserEmail: "carlos@email.com",
      reason:
        "Filme intenso com crítica social forte e personagens muito bem construídos.",
      title: "Fight Club",
      rating: 8.4,
      status: "watched",
    },
    {
      id: 3,
      toUserEmail: "maria@email.com",
      reason:
        "Um dos melhores filmes sobre identidade e alienação na sociedade moderna.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 4,
      toUserEmail: "pedro@email.com",
      reason:
        "Narrativa cheia de simbolismos e um final que muda toda a interpretação do filme.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 5,
      toUserEmail: "juliana@email.com",
      reason:
        "Excelente atuação do Brad Pitt e do Edward Norton, vale muito assistir.",
      title: "Fight Club",
      rating: 8.4,
      status: "watched",
    },
    {
      id: 6,
      toUserEmail: "rodrigo@email.com",
      reason: "O filme provoca reflexões sobre consumo, identidade e liberdade.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 7,
      toUserEmail: "fernanda@email.com",
      reason:
        "Estética única, trilha sonora marcante e personagens inesquecíveis.",
      title: "Fight Club",
      rating: 8.4,
      status: "watched",
    },
  ]);

  const PAGE_SIZE = 5;
  const [page, setPage] = useState(1);

  const visibleRecommendations = recommendations.slice(0, page * PAGE_SIZE);
  const hasMore = visibleRecommendations.length < recommendations.length;

  const toggleStatus = (id) => {
    setRecommendations((prev) =>
      prev.map((rec) =>
        rec.id === id
          ? { ...rec, status: rec.status === "pending" ? "watched" : "pending" }
          : rec
      )
    );
  };

  return (
    <section className="sent-recommendations">
      <h2 className="sent-recommendations__title">Recomendei:</h2>

      <div className="sent-recommendations__list">
        {visibleRecommendations.map((rec) => (
          <div key={rec.id} className="sent-recommendations__card">
            <div className="sent-recommendations__avatar">
              <div className="sent-recommendations__avatar-circle"></div>
            </div>

            <div className="sent-recommendations__info">
              <p className="sent-recommendations__user">
                <strong>Para:</strong> {rec.toUserEmail}
              </p>

              <p className="sent-recommendations__reason">
                <strong>Razão:</strong> {rec.reason}
              </p>
            </div>

            <div className="sent-recommendations__movie">
              <p className="sent-recommendations__movie-title">
                título: <strong>{rec.title}</strong>
              </p>

              <p className="sent-recommendations__rating">⭐ {rec.rating}</p>

              <button
                type="button"
                className={
                  rec.status === "watched"
                    ? "sent-recommendations__status-btn sent-recommendations__status-btn--watched"
                    : "sent-recommendations__status-btn sent-recommendations__status-btn--pending"
                }
                onClick={() => toggleStatus(rec.id)}
              >
                {rec.status === "watched" ? "Assistido" : "Pendente"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="sent-recommendations__actions">
          <button
            type="button"
            className="sent-recommendations__status-btn sent-recommendations__status-btn--pending"
            onClick={() => setPage((p) => p + 1)}
          >
            Carregar mais
          </button>
        </div>
      )}
    </section>
  );
}

export default SentRecommendationsPanel;