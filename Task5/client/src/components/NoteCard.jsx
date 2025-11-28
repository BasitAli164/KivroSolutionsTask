import { Link } from "react-router-dom";
import React from "react";
const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-bold">{note.title}</h2>
      <p>{note.content}</p>
      <div className="flex justify-end mt-2">
        <Link to={`/edit/${note._id}`} className="mr-2 text-blue-600">Edit</Link>
        <button onClick={() => onDelete(note._id)} className="text-red-600">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
