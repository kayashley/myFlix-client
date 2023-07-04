import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);


useEffect(() => {
    if (!token) return;
    
    // fetch movie api
    fetch("https://myflix-kc.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((response) => response.json())
        .then((data) => {
            // setMovies(movies);
            // console.log(data);

            // process the api response and update the movies state
            const moviesFromApi = data.map((movie) => {
                return {
                    _id: movie._id,
                    Title: movie.Title,
                    Description: movie.Description,
                    Director: {
                        Name: movie.Director.Name,
                        Bio: movie.Director.Bio,
                        Birth: movie.Director.BirthYear
                    },
                    Genre: {
                        Name: movie.genre.Name,
                        Description: movie.genre.Description
                    },
                    ImagePath: movie.ImagePath,
                    Featured: movie.Featured.toString()
                };
            });

            setMovies(moviesFromApi);
        });

}, [token]);

// user is not signed in loads login or signup view
if (!user) {
    return (
        <>
        <LoginView onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
        }}/>
        or
        <SignupView />
        </>
    );
}


// brings user back to the movie selection
if (selectedMovie) {
    return (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
}

// no movie will show that the list is empty
if (movies.length === 0) {
    return (
        <>
        {movies.map((movie) => (
            <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                }}
            />
        ))}
            <div>The list is empty!</div>;
        </>
    );
}

// nullifies token when user logs out
return (
    <div>
        <button
            onClick={() => {
                setUser(null);
                setToken(null);
                localStorage.clear();
            }}
            >
                Logout
        </button>
        
    </div>
    );
};
