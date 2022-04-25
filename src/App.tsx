import "./App.css";
import { authors, books } from "./data/data";
import SearchableGenericList, {
  AuthorListProps,
  BookListProps,
} from "./components/SearchableGenericList";
import FilterableGenericList, {
  AuthorFilterableListProps,
  BookFilterableListProps,
} from "./components/FilterableGenericList";
import BooksList, {
  BookFilterableSearchableListProps,
} from "./components/BooksList";
import AuthorsList, {
  AuthorFilterableSearchableListProps,
} from "./components/AuthorsList";

function App() {
  return (
    <>
      <h3>Filtered and Searchable Books</h3>
      <BooksList {...new BookFilterableSearchableListProps(books)} />

      <h3>Filtered and Searchable Authors</h3>
      <AuthorsList {...new AuthorFilterableSearchableListProps(authors)} />
    </>
  );
}

export default App;
