import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (topic: string) => void;
}

const validationSchema = Yup.object().shape({
  topic: Yup.string().trim().required("Please enter a search term"),
});

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header>
      <Formik
        initialValues={{
          topic: "",
        }}
        onSubmit={(values, actions) => {
          onSearch(values.topic.trim());
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            name="topic"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.btn}>
            Search
          </button>
          <ErrorMessage name="topic">
            {(msg) => <span className={css.error}>{msg}</span>}
          </ErrorMessage>
        </Form>
      </Formik>
    </header>
  );
}
