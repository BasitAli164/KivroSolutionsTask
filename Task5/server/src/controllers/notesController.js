import Note from "../models/Note.js";

// Create Note
export const createNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const note = await Note.create({
    title,
    content,
    userId: req.user._id,
  });

  res.status(201).json(note);
};

// Get Notes (with optional search)
export const getNotes = async (req, res) => {
  const search = req.query.search
    ? {
        $or: [
          { title: { $regex: req.query.search, $options: "i" } },
          { content: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const notes = await Note.find({ userId: req.user._id, ...search }).sort({
    createdAt: -1,
  });

  res.json(notes);
};

// Update Note
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  if (note.userId.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  note.title = req.body.title || note.title;
  note.content = req.body.content || note.content;

  const updatedNote = await note.save();
  res.json(updatedNote);
};

// Delete Note
export const deleteNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  if (note.userId.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  await Note.deleteOne({ _id: note._id });
  res.json({ message: "Note removed" });
};

