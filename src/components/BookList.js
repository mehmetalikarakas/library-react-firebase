import React from "react";
import { Button } from "primereact/button";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const BookList = ({ books }) => {
  const handleClick = async (id) => {
    // console.log(id);

    const ref = doc(db, "books", id);

    await deleteDoc(ref);
  };
  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            <Button
              onClick={() => handleClick(book.id)}
              style={{ marginLeft: "500px" }}
              icon="pi pi-times"
              className="p-button-rounded p-button-danger"
              aria-label="Cancel"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
