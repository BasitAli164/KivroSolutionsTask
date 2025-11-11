import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

const BookForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    bookUniqeNo: "",
    description: "",
    publishedYear: "",
    totalCopies: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: "",
      author: "",
      bookUniqeNo: "",
      description: "",
      publishedYear: "",
      totalCopies: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl"
      whileHover={{ scale: 1.01 }}
    >
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-cyan-400">
        <PlusCircle className="w-6 h-6" /> Add New Book
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Book Title"
          className="bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
          required
        />
        <input
          type="text"
          name="bookUniqeNo"
          value={formData.bookUniqeNo}
          onChange={handleChange}
          placeholder="Book Unique No"
          className="bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
        />
        <input
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
          placeholder="Published Year"
          className="bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
        />
        <input
          type="number"
          name="totalCopies"
          value={formData.totalCopies}
          onChange={handleChange}
          placeholder="Total Copies"
          className="bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
        />
      </div>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="bg-white/10 border border-white/20 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none mt-4 w-full"
      ></textarea>

      <button
        type="submit"
        className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg"
      >
        Add Book 🚀
      </button>
    </motion.form>
  );
};

export default BookForm;
