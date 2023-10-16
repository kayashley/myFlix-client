// without browser routing
{
  /* 
  //   return (
  //     <Row className="justify-content-md-center">
  //       {!user ? (
  //         <Col md={5}>
  //           <LoginView
  //             onLoggedIn={(user, token) => {
  //               setUser(user);
  //               setToken(token);
  //             }}
  //           />
  //           or
  //           <SignupView />
  //         </Col>
  //       ) : selectedMovie ? (
  //         <Col md={8}>
  //           <MovieView
  //             movie={selectedMovie}
  //             onBackClick={() => setSelectedMovie(null)}
  //           />
  //         </Col>
  //       ) : movies.length === 0 ? (
  //         <div>The list is empty!</div>
  //       ) : (
  //         <>
  //           {movies.map((movie) => (
  //             <Col className="mb-5" key={movie.id} md={3}>
  //               <MovieCard
  //                 movie={movie}
  //                 onMovieClick={(newSelectedMovie) => {
  //                   setSelectedMovie(newSelectedMovie);
  //                 }}
  //               />
  //             </Col>
  //           ))}
  //         </>
  //       )}
  //     </Row>
  //   );
  // }; */
}

//   if (!user) {
//     return (
//       <>
//         <LoginView
//           // stores token and user as a state variable
//           onLoggedIn={(user, token) => {
//             setUser(user);
//             setToken(token);
//           }}
//         />
//         or <SignupView />
//       </>
//     );
//   }

//   if (selectedMovie) {
//     return (
//       <MovieView
//         movie={selectedMovie}
//         onBackClick={() => setSelectedMovie(null)}
//       />
//     );
//   }

//   if (movies.length === 0) {
//     return <div>The list is empty!</div>;
//   }

//   return (
//     <div>
//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.id}
//           movie={movie}
//           onMovieClick={(newSelectedMovie) => {
//             setSelectedMovie(newSelectedMovie);
//           }}
//         />
//       ))}
//       {/* // Logout button - clears out any values that are stored*/}
//       <button
//         onClick={() => {
//           setUser(null);
//           setToken(null);
//           localStorage.clear();
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };
