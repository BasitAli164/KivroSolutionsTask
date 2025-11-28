// EditNote.jsx
import  React,{ useState, useEffect } from "react";
import API from "../api/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await API.get(`/notes?search=`);
        const note = res.data.find((n) => n._id === id);
        if (note) {
          setTitle(note.title);
          setContent(note.content);
        }
      } catch (error) {
        toast.error("Failed to load note");
      }
    };
    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/notes/${id}`, { title, content });
      toast.success("Note updated");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update note");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Edit Note</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Update Note</button>
      </form>
    </div>
  );
};

export default EditNote;