import React from "react";

const BookTable = ({ books, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Book List</h2>

      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Copies</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((b, index) => (
              <tr key={b._id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{b.title}</td>
                <td className="border p-2">{b.author}</td>
                <td className="border p-2 text-center">{b.publishedYear}</td>
                <td className="border p-2 text-center">{b.totalCopies}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => onDelete(b._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border p-2 text-center" colSpan="6">
                No books available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
