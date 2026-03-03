import poster from "../../../../images/posterFightClub.webp";

function PanelSearch({ query }) {
  const movie = {
    title: "Fight Club",
    type: "Filme",
    genres: "Drama · Thriller",
    overview:
      "It's the end of the century at a corner of the city...",
    runtime: "139 min",
    language: "Inglês",
    country: "EUA",
    year: "1999",
    rating: "8.4",
    posterUrl: poster,
  };

  if (!query) return <div>Digite um filme e pesquise.</div>;

  return (
    <section className="panel-search">
      <div className="panel-search__card">
        <div className="panel-search__grid">
          <div className="panel-search__poster">
            <img src={movie.posterUrl} alt={movie.title} />
          </div>

          <div className="panel-search__header">
            <span className="panel-search__badge">{movie.type}</span>
            <h2 className="panel-search__title">{movie.title}</h2>
            <div className="panel-search__genres">{movie.genres}</div>
          </div>

          <div className="panel-search__rating">
            <div className="panel-search__rating-pill">
              <span className="panel-search__star">⭐</span>
              <span className="panel-search__score">{movie.rating}</span>
              <span className="panel-search__year">({movie.year})</span>
            </div>
          </div>

          <div className="panel-search__overview">
            <p>{movie.overview}</p>
          </div>

          <div className="panel-search__meta">
            <div className="panel-search__meta-item">
              <span className="panel-search__meta-label">Duração:</span>
              <span className="panel-search__meta-value">{movie.runtime}</span>
            </div>
            <div className="panel-search__meta-item">
              <span className="panel-search__meta-label">Idioma:</span>
              <span className="panel-search__meta-value">{movie.language}</span>
            </div>
            <div className="panel-search__meta-item">
              <span className="panel-search__meta-label">País:</span>
              <span className="panel-search__meta-value">{movie.country}</span>
            </div>
            <div className="panel-search__meta-item">
              <span className="panel-search__meta-label">Lançamento:</span>
              <span className="panel-search__meta-value">{movie.year}</span>
            </div>
          </div>

          <div className="panel-search__right-bottom" />
        </div>
      </div>
    </section>
  );
}

export default PanelSearch;