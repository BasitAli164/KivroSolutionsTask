import React from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const BookTable = ({ books, onDelete }) => {
  return (
    <motion.div
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl overflow-x-auto"
      whileHover={{ scale: 1.01 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
        📚 Book Collection
      </h2>

      <table className="min-w-full text-left text-sm text-white">
        <thead className="border-b border-white/20 text-cyan-300">
          <tr>
            <th className="px-3 py-2">#</th>
            <th className="px-3 py-2">Title</th>
            <th className="px-3 py-2">Author</th>
            <th className="px-3 py-2">Year</th>
            <th className="px-3 py-2">Copies</th>
            <th className="px-3 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((b, index) => (
              <motion.tr
                key={b._id}
                className="border-b border-white/10 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2 font-semibold">{b.title}</td>
                <td className="px-3 py-2">{b.author}</td>
                <td className="px-3 py-2">{b.publishedYear}</td>
                <td className="px-3 py-2">{b.totalCopies}</td>
                <td className="px-3 py-2 text-center">
                  <button
                    onClick={() => onDelete(b._id)}
                    className="text-red-400 hover:text-red-300 transition-all"
                    title="Delete Book"
                  >
                    <Trash2 className="w-5 h-5 inline" />
                  </button>
                </td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td className="text-center py-3 text-gray-400" colSpan="6">
                No books found 🚫
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
};

export default BookTable;
