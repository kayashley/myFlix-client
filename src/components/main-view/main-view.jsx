import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

const [selectedMovie, setSelectedMovie] = useState(null);

// fetch movie api
useEffect(() => {
    fetch("https://myflix-kc.herokuapp.com/movies")
        .then((response) => response.json())
        .then((data) => {
            // process the api response and update the movies state
            const moviesFromApi = data.map((movie) => {
                return {
                    id: movie.id,
                    title: movie.title,
                    imageURL: movie.imageURL,
                    director: movie.director,
                    description: movie.description,
                    year: movie.year,
                    genreName: movie.genre
                };
            });

            setMovies(moviesFromApi);
        });
}, []);

if (selectedMovie) {
    return (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
}

if (movies.length === 0) {
    return <div>The list is empty!</div>;
}

return (
    <div>
        {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                }}
            />
        ))}
    </div>
    );
};
