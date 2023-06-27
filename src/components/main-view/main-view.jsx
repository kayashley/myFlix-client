import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1, 
            title: "Thor",
            imageURL: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
            director: "Taika Waititi",
            description: "In 965 AD, Odin, king of Asgard, wages war against the Frost Giants of Jotunheim and their leader Laufey, to prevent them from conquering the Nine Realms, starting with Earth. The Asgardian warriors defeat the Frost Giants in Tønsberg, Norway, and seize the source of their power, the Casket of Ancient Winters.",
            year: "2011"
        },
        {
            id: 2, 
            title: "Iron Man",
            imageURL: "https://cdn.shopify.com/s/files/1/1057/4964/products/Iron-Man-Vintage-Movie-Poster-Original-1-Sheet-27x41_e2bcb66a-ccd4-40b9-8726-d58b195d2085.jpg?v=1648530340",
            director: "Jon Favreau",
            description: "Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity.",
            year: "2008"
            
        },
        {
            id: 3, 
            title: "Elf",
            imageURL: "https://i.ebayimg.com/images/g/5hMAAOSw5CtimQEK/s-l1600.jpg",
            director: "Jon Favreau",
            description: "Buddy (Will Ferrell) was accidentally transported to the North Pole as a toddler and raised to adulthood among Santa's elves. Unable to shake the feeling that he doesn't fit in, the adult Buddy travels to New York, in full elf uniform, in search of his real father.",
            year: "2003"
            
        }
    ]);

const [selectedMovie, setSelectedMovie] = useState(null);

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
