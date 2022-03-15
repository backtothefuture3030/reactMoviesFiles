import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, medium_cover_image, title_long, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} alt={title_long} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title_long}</Link>
      </h2>
      <ul className={styles.movie__genres}>
        {genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
      <p>{summary.length > 320 ? `${summary.slice(0, 320)}...` : summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;

/*
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

/// parameter 강의를 통해서 각각의 영화마다 id 가 존재한다는걸 알았고 그 개개의 id마다 웹사이트로 연결되어 제목을 클릭하면 특정 페이지 연출 
/// publishing 강의를 통해서 npm run deploy 사용후 github에 퍼블리싱 하는 과정을 배움
/// style 강의는 css를 통해서 그냥 디자인을 입히는 강의.

function Movie({id, coverImg, title, year, summary, genres}){
    return(
    <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        </div>
    );
}

Movie.protoType ={
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie

*/