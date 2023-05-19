import React, { useState } from 'react';

const Editor = ({ onRender }) => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleRender = () => {
    onRender(content);
  };

  return (
    <div className="flex-1 bg-gray-900 text-white flex flex-col">
      <div className="flex justify-between bg-gray-800 p-2">
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg font-bold">LaTeX</span>
          <span className="text-gray-200 text-sm ml-1">Editor</span>
        </div>
        <button
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-4 py-2 rounded"
          onClick={handleRender}
        >
          Render
        </button>
      </div>
      <textarea
        className="flex-1 bg-gray-900 text-white p-4 outline-none resize-none"
        style={{ minHeight: 'calc(100vh - 80px)' }}
        value={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;