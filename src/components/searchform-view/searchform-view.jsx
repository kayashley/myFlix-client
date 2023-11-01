// import { useState } from "react";
// import { Form, FormControl } from "react-bootstrap";
// import "./searchform-view.scss";

// export const SearchForm = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e) => {
//     const newSearchTerm = e.target.value;
//     setSearchTerm(newSearchTerm);

//     if (newSearchTerm === "") {
//       onSearch("");
//     } else {
//       onSearch(newSearchTerm);
//     }
//   };

//   return (
//     <Form>
//       <FormControl
//         type="text"
//         placeholder="Search movies by title..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="search"
//       />
//     </Form>
//   );
// };

import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import "./searchform-view.scss";

export const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Call the onSearch function with the search term
    onSearch(newSearchTerm);
  };

  return (
    <Form>
      <FormControl
        type="text"
        placeholder="Search movies by title..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search"
      />
    </Form>
  );
};
