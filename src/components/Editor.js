import React, { useState } from "react";
import { FaPlay, FaClipboard, FaTrash } from "react-icons/fa";

const Editor = ({ onRender }) => {
  const [content, setContent] = useState(
    "\\documentclass{article}\n\n\\begin{document}\n\n\\section{Introduction}\nThis is a sample LaTeX document.\n\n\\subsection{Subsection}\nHere is some text in a subsection.\n\n\\end{document}"
  );

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleRender = () => {
    onRender(content);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  const handleClean = () => {
    setContent("");
  };

  return (
    <div className="flex-1 bg-gray-900 text-white flex flex-col">
      <div className="flex justify-between bg-gray-800 p-2">
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg font-bold">LaTeX</span>
          <span className="text-gray-200 text-sm ml-1">Editor</span>
        </div>
        <div>
          <button
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-4 py-2 rounded mr-2"
            onClick={handleRender}
          >
            <FaPlay />
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-gray-900 px-4 py-2 rounded mr-2"
            onClick={handleCopyToClipboard}
          >
            <FaClipboard />
          </button>
          <button
            className="bg-red-500 hover:bg-red-400 text-gray-900 px-4 py-2 rounded"
            onClick={handleClean}
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <textarea
        className="flex-1 bg-gray-900 text-white p-4 outline-none resize-none"
        style={{ minHeight: "calc(100vh - 80px)" }}
        value={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
