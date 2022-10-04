import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const BookForm = () => {
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newBook);

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
