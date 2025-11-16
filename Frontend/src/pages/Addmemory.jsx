import React, { useState } from "react";

const AddMemory = ({ onSave = () => {}, onCancel = () => {} }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImg(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      title,
      date,
      desc,
      img,
    });
  };

  return (
    <div className="min-h-screen bg-background-light p-6 flex justify-center items-center">

      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md border border-gray-200">
        {/* HEADER */}
        <h2 className="text-3xl font-black text-[#111618] mb-6">
          Add New Memory
        </h2>

        {/* FORM */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

          {/* TITLE */}
          <div>
            <label className="block mb-1 font-medium text-[#111618]">Title</label>
            <input
              type="text"
              placeholder="Enter memory title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="block mb-1 font-medium text-[#111618]">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-1 font-medium text-[#111618]">Description</label>
            <textarea
              placeholder="Write a short description..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows="4"
              className="w-full p-3 border rounded-lg resize-none focus:border-primary outline-none"
            />
          </div>

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block mb-1 font-medium text-[#111618]">Photo</label>

            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="cursor-pointer"
              />

              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-20 h-20 rounded-lg object-cover border"
                />
              )}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2 rounded-lg border text-[#111618] hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90"
            >
              Save Memory
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddMemory;
