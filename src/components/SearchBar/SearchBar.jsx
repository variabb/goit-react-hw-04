import s from "./SearchBar.module.css";

import { Field, Form, Formik } from "formik";

function SearchBar({ onSubmit }) {
  return (
    <>
      <header className={s.header}>
        <Formik
          onSubmit={(values) => onSubmit(values.search)}
          initialValues={{ search: "" }}
        >
          <Form className={s.search}>
            <Field
              className={s.field}
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
