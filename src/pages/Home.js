//components
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

import useCollection from "../hooks/useCollection";

const Home = () => {
  const { documents: books } = useCollection("books");

  // const [books, setBooks] = useState(null);

  // useEffect(() => {
  //   const ref = collection(db, "books");

  //   getDocs(ref).then((snap) => {
  //     let result = [];
  //     snap.forEach((doc) => {
  //       // console.log(doc.data());
  //       result.push({ id: doc.id, ...doc.data() });
  //     });
  //     console.log(result);

  //     setBooks(result);
  //   });
  // }, []);

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
};

export default Home;
