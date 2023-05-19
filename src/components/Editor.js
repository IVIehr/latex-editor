import React from "react";
const { parse, HtmlGenerator } = require("latex.js");

const Editor = () => {
  let latex =
    "\\documentclass{article}\n\n\\begin{document}\n\n\\section{Introduction}\nThis is a sample LaTeX document.\n\n\\subsection{Subsection}\nHere is some text in a subsection.\n\n\\end{document}";
  let generator = new HtmlGenerator({ hyphenate: false });

  let doc = parse(latex, { generator: generator }).htmlDocument();
  return (
    <>
      <iframe
        id="preview"
        sandbox="allow-same-origin allow-scripts"
        srcDoc={new XMLSerializer().serializeToString(doc)}
      ></iframe>
    </>
  );
};

export default Editor;
