import React, { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-8"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Book</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Book Title"
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          name="bookUniqeNo"
          value={formData.bookUniqeNo}
          onChange={handleChange}
          placeholder="Book Unique No"
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
          placeholder="Published Year"
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          name="totalCopies"
          value={formData.totalCopies}
          onChange={handleChange}
          placeholder="Total Copies"
          className="border p-2 rounded-md"
        />
      </div>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 rounded-md mt-4 w-full"
      ></textarea>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
