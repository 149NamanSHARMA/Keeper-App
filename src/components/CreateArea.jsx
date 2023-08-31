import React, { useState } from 'react';

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ id: '', title: '', content: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note.title && note.content) {
      onAdd({ ...note, id: Date.now() }); // Assign a unique id using Date.now()
      setNote({ id: '', title: '', content: '' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
