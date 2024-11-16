// import s from "./SearchBar.module.css";

import { Field, Form, Formik } from "formik";

function SearchBar({ onSubmit }) {
  return (
    <>
      <header>
        <Formik
          onSubmit={(values) => onSubmit(values.search)}
          initialValues={{ search: "" }}
        >
          <Form>
            <Field
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </>
  );
}

export default SearchBar;
