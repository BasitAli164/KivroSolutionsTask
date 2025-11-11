import React, { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import "./App.css";

const API_URL = "http://localhost:3000/api/book";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch all books
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

  // Add book
  const addBook = async (bookData) => {
    try {
      await axios.post(`${API_URL}/addbook`, bookData);
      toast.success("📘 Book added successfully!");
      fetchBooks();
    } catch (err) {
      toast.error("Error adding book");
      console.error(err);
    }
  };

  // Delete book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/del/${id}`);
      toast.success("🗑️ Book deleted!");
      fetchBooks();
    } catch (err) {
      toast.error("Error deleting book");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 text-white px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center items-center gap-3 mb-2">
          <BookOpen className="w-8 h-8 text-cyan-400" />
          <h1 className="text-4xl font-extrabold tracking-tight">
            Book Management System
          </h1>
        </div>
        <p className="text-gray-400">Manage your library in style 🚀</p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <BookForm onAdd={addBook} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <BookTable books={books} onDelete={deleteBook} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
