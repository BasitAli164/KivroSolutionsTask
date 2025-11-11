import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await axios.get(process.env.API_URL);
      setBooks(res.data);
    } catch (err) {
      toast.error("Failed to fetch books");
    }
  };

  // Add new book
  const addBook = async (book) => {
    try {
      const res = await axios.post(process.evn.API_URL, book);
      toast.success("Book added successfully!");
      setBooks((prev) => [...prev, res.data]);
    } catch (err) {
      toast.error("Error adding book");
    }
  };

  // Delete a book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${process.evn.API_URL}/${id}`);
      setBooks((prev) => prev.filter((b) => b._id !== id));
      toast.success("Book deleted");
    } catch (err) {
      toast.error("Failed to delete book");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <Toaster richColors position="top-right" />
      <h1 className="text-2xl font-bold mb-6">📚 Book Management App</h1>

      <BookForm onAddBook={addBook} />
      <BookTable books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
