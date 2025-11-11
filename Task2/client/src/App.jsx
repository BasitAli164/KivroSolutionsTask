import React, { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import { toast } from "sonner";
import './App.css'

const API_URL = "http://localhost:3000/api/book";

function App() {
  const [books, setBooks] = useState([]);

  // 📚 Fetch all books
  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${API_URL}/getallbook`);
      setBooks(res.data.book);
    } catch (err) {
      toast.error("Failed to fetch books");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ➕ Add book
  const addBook = async (bookData) => {
    try {
      const res = await axios.post(`${API_URL}/addbook`, bookData);
      toast.success("Book added successfully!");
      fetchBooks();
    } catch (err) {
      toast.error("Error adding book");
      console.error(err);
    }
  };

  // ❌ Delete book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/del/${id}`);
      toast.success("Book deleted!");
      fetchBooks();
    } catch (err) {
      toast.error("Error deleting book");
      console.error(err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        📘 Book Management System
      </h1>

      <BookForm onAdd={addBook} />

      <BookTable books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
