import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

export const Route = createFileRoute('/about')({
  component: AboutComponent
})

const TextEditor = () => {
  const editorRef = useRef(null);
  const [linkInputVisible, setLinkInputVisible] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const wrapSelection = (wrapper) => {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const startOffset = range.startOffset;
    const endOffset = range.endOffset;

    const editor = editorRef.current;
    const textContent = editor.textContent;

    // Get the selected text
    const selectedText = textContent.slice(startOffset, endOffset);

    // Replace the selected text with the wrapped text
    const beforeText = textContent.slice(0, startOffset);
    const afterText = textContent.slice(endOffset);

    // Update the content
    editor.textContent = beforeText + wrapper + selectedText + wrapper + afterText;

    // Restore the cursor position
    const newRange = document.createRange();
    newRange.setStart(editor.childNodes[0], startOffset + wrapper.length);
    newRange.setEnd(editor.childNodes[0], endOffset + wrapper.length);

    selection.removeAllRanges();
    selection.addRange(newRange);
  };

  const applyBold = () => {
    wrapSelection("*"); // Wrap selection with asterisks for bold
  };

  return (
    <div>
      <div>
        <button onClick={applyBold}>Bold</button>
        <button onClick={() => applyStyle("italic")}>Italic</button>
        <button onClick={() => applyStyle("underline")}>Underline</button>
        <button onClick={() => setLinkInputVisible(!linkInputVisible)}>
          Add Link
        </button>
        {linkInputVisible && (
          <div style={{ display: "inline-block", marginLeft: "10px" }}>
            <input
              type="text"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Enter URL"
            />
            <button onClick={insertLink}>Insert</button>
          </div>
        )}
      </div>
      <div
        className='text-2xl text-gray-800 bg-slate-50 bg-gradient-to-r from-green-100 to-green-50'
        ref={editorRef}
        contentEditable
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "200px",
          marginTop: "10px"
        }}
      >
        Start editing this text...
      </div>
    </div>
  );
};


function AboutComponent() {
  const posts = Route.useLoaderData()
  const [state, setState] = useState({ messages: [''] });
  useEffect(() => {
    const effect = async () => {
      const response = await fetch('http://localhost:3061/streaming');
      if (!response.body) {
        throw new Error('ReadableStream not supported!');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;

      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;

        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          console.log('Received chunk:', chunk);

          setState((state) => {
            return {
              messages: [...state.messages, chunk],
            };
          });
          
        }
      }
    }
    effect();
  }, []);
  return (
    <div className="p-20">
      <h3>About1</h3>
      <Button>Click me</Button>
      <p>{posts.message}</p>
      <h3>Streaming</h3>
      <TextEditor />
      <ul>
        {state.messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  )
}
