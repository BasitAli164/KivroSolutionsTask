// AddNote.jsx
import React,{ useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/notes", { title, content });
      toast.success("Note added");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add note");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Add Note</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 rounded"></textarea>
        <button type="submit" className="bg-green-600 text-white py-2 rounded">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;