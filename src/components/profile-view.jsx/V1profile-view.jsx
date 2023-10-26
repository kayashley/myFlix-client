//   return (
//     <div>
//       <p>User: {user.Username}</p>
//       <p>Email: {user.Email}</p>
//       <div>
//         <h2>Favorite Movies</h2>
//         {favoriteMovieList.map((movies) => {
//           return (
//             <div key={movies._id}>
//               <img src={movies.ImagePath} />
//               <Link to={`/movies/${movies._id}`}>
//                 <h4>{movies.Title}</h4>
//               </Link>
//               <button variant="secondary" onClick={() => removeFav(movies._id)}>
//                 Remove from list
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       <form className="profile-view" onSubmit={(e) => handleSubmit(e)}>
//         <h2>Want to change some info?</h2>
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           defaultValue={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           defaultValue={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <label>Email Address</label>
//         <input
//           type="email"
//           name="email"
//           defaultValue={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label>Birthday</label>
//         <input
//           type="birthday"
//           name="birthday"
//           defaultValue={birthday}
//           onChange={(e) => setBirthday(e.target.value)}
//         />
//         <button variant="primary" type="submit">
//           Update
//         </button>
//       </form>
//     </div>
//   );
