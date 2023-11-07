import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import "./searchform-view.scss";

export const SearchForm = ({ search, handleOnChange }) => {
  return (
    <Form>
      <FormControl
        type="text"
        placeholder="Search movies by title..."
        value={search}
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
        className="search"
      />
    </Form>
  );
};
