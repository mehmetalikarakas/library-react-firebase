import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const BookForm = () => {
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newBook);
    //Belge ekleme işlemi

    const ref = collection(db, "books");
    await addDoc(ref, {
      title: newBook,
    });

    setNewBook("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Yeni Kitap Ekle</span>
        <InputText
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <Button label="Kitap Ekle" className="p-button-rounded p-button-info" />
    </form>
  );
};

export default BookForm;
