import React, { useState } from "react";

const BookForm = ({ onAddBook }) => {
  const [form, setForm] = useState({ title: "", author: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    onAddBook(form);
    setForm({ title: "", author: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded mb-6 w-full max-w-md"
    >
      <h2 className="text-lg font-semibold mb-3">Add New Book</h2>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Book Title"
        className="border p-2 w-full mb-3 rounded"
      />
      <input
        type="text"
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Author Name"
        className="border p-2 w-full mb-3 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
