import { useState } from "react";

function RecommendationsPanel() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      userEmail: "ana@email.com",
      reason:
        "Clube da Luta chama atenção pela narrativa provocadora, personagens marcantes e reviravoltas.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 2,
      userEmail: "carlos@email.com",
      reason:
        "Filme intenso com crítica social forte e personagens muito bem construídos.",
      title: "Fight Club",
      rating: 8.4,
      status: "watched",
    },
    {
      id: 3,
      userEmail: "maria@email.com",
      reason:
        "Um dos melhores filmes sobre identidade e alienação na sociedade moderna.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 4,
      userEmail: "pedro@email.com",
      reason:
        "Narrativa cheia de simbolismos e um final que muda toda a interpretação do filme.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 5,
      userEmail: "juliana@email.com",
      reason:
        "Excelente atuação do Brad Pitt e do Edward Norton, vale muito assistir.",
      title: "Fight Club",
      rating: 8.4,
      status: "watched",
    },
    {
      id: 6,
      userEmail: "rodrigo@email.com",
      reason:
        "O filme provoca reflexões sobre consumo, identidade e liberdade.",
      title: "Fight Club",
      rating: 8.4,
      status: "pending",
    },
    {
      id: 7,
      userEmail: "fernanda@email.com",
      reason:
        "Estética única, trilha sonora marcante e personagens inesquecíveis.",
      title: "Fight Club",
      rating: 8.4,
      status: "watched",
    },
  ]);

  // Feature: mostrar 5 por vez
  const PAGE_SIZE = 5;
  const [page, setPage] = useState(1);

  const visibleRecommendations = recommendations.slice(0, page * PAGE_SIZE);
  const hasMore = visibleRecommendations.length < recommendations.length;

  const toggleStatus = (id) => {
    setRecommendations((prev) =>
      prev.map((rec) =>
        rec.id === id
          ? {
              ...rec,
              status: rec.status === "pending" ? "watched" : "pending",
            }
          : rec
      )
    );
  };

  return (
    <section className="recommendations-panel">
      <h2 className="recommendations-title">Recebidos:</h2>

      <div className="recommendations-list">
        {visibleRecommendations.map((rec) => (
          <div key={rec.id} className="recommendation-card">
            <div className="recommendation-avatar">
              <div className="avatar-circle"></div>
            </div>

            <div className="recommendation-info">
              <p className="recommendation-user">
                <strong>Quem indicou:</strong> {rec.userEmail}
              </p>

              <p className="recommendation-reason">
                <strong>Razão:</strong> {rec.reason}
              </p>
            </div>

            <div className="recommendation-movie">
              <p className="recommendation-title">
                título: <strong>{rec.title}</strong>
              </p>

              <p className="recommendation-rating">⭐ {rec.rating}</p>

              <button
                type="button"
                className={
                  rec.status === "watched"
                    ? "status-btn watched"
                    : "status-btn pending"
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
        <div className="recommendations-actions">
          <button
            type="button"
            className="status-btn pending"
            onClick={() => setPage((p) => p + 1)}
          >
            Carregar mais
          </button>
        </div>
      )}
    </section>
  );
}

export default RecommendationsPanel;