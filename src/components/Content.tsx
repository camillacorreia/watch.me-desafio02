import { MovieProps } from '../App';
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface Conteudo {
  content: {
    title: string;
    movies: MovieProps[];
  };
}

export function Content(props: Conteudo) {
  return (
    <>
      <div className="container">
        <Header genre={{ title: props.content.title }} />
        <main>
          <div className="movies-list">
            {props.content.movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}