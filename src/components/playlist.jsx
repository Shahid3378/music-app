import React, { useState } from "react";
import { X } from "lucide-react";

const Playlist = ({ onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onCreate(name);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-background w-full max-w-lg rounded-lg border border-border shadow-lg p-6 relative animate-in fade-in zoom-in-95">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 opacity-70 hover:opacity-100"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex flex-col gap-2 text-center sm:text-left mb-4">
          <h2 className="text-lg font-semibold text-foreground">Create New Playlist</h2>
          <p className="text-sm text-muted-foreground">
            Add a name and description for your playlist
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">Name</label>
            <input
              type="text"
              placeholder="My Playlist"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground">
              Description (optional)
            </label>
            <textarea
              placeholder="Add a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 w-full resize-none rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="h-9 px-4 rounded-md border border-border text-sm text-foreground hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-9 px-4 rounded-md bg-neon-green text-black text-sm font-medium hover:bg-neon-green-hover"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Playlist;
