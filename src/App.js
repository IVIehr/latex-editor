import React, { useState } from 'react';
import Editor from './components/Editor';
import Output from './components/Output';

const App = () => {
  const [renderedContent, setRenderedContent] = useState('');

  const handleRender = (content) => {
    // Perform any rendering logic or processing here
    setRenderedContent(content);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-900 text-white h-full">
        <Editor onRender={handleRender} />
      </div>
      <div className="w-1/2 bg-gray-200 p-4">
        <Output content={renderedContent} />
      </div>
    </div>
  );
};

export default App;
