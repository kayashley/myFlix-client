import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view.jsx/profile.view";
import { FooterView } from "../footer-view/footer-view";
import { SearchForm } from "../searchform-view/searchform-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SearchForm } from "../searchform-view/searchform-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);
  const [movies, setMovies] = useState([]);

  const [filterMovies, setFilterMovies] = useState([]);
  const [search, setSearch] = useState("");

  // v2 - filter feature
  const filteredMovies = (movies, search) => {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
  };

  useEffect(() => {
    setFilterMovies(filteredMovies(movies, search));
  }, [search, movies]);

  // fetch movie api
  useEffect(() => {
    if (!token) return;

    // fetch movie api
    fetch("https://web-production-0aea6.up.railway.app/movies", {
      // allows for authenticated requests to your API
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((movies) => {
        // process the api response and update the movies state
        // console.log("movie list:", movie);
        setMovies(movies);
      })
      .catch((error) => {
        console.error("Error fetching movies data", error);
      });
    // need to call token in the second argument , known as dependency array - ensures fetch is called every time token changes
  }, [token]);

  return (
    <BrowserRouter>
      {/* navbar */}
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          {/* route to signup */}
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          {/* route to login */}
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          {/* route to movieId */}
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col key={movies._id} md={8}>
                    <MovieView
                      movies={movies}
                      user={user}
                      setUser={setUser}
                      token={token}
                    />
                  </Col>
                )}
              </>
            }
          />
          {/* route to home page */}
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>This list is empty!</Col>
                ) : (
                  <>
                    <Row>
                      <Col>
                        <SearchForm
                          search={search}
                          handleOnChange={setSearch}
                        />
                      </Col>
                    </Row>
                    {filterMovies.map((movie) => (
                      <Col className="mb-4" key={movie._id} md={3} xs={6}>
                        <MovieCard movie={movie} user={user} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
          {/* route to profile  */}
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView
                      user={user}
                      token={token}
                      setUser={setUser}
                      movies={movies}
                    />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
        <FooterView />
      </Row>
    </BrowserRouter>
  );
};
