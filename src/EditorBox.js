import React, { useEffect, useState } from 'react';
import Editor from "@monaco-editor/react";
import { io } from 'socket.io-client';

const socket = io("http://localhost:3001");

const EditorBox = ({theme, fontSize, lang}) => {
  const [userCode, setUserCode] = useState('');

  useEffect(() => {
    socket.on('updateCode', (data) => {
      setUserCode(data);
    });
  }, []);

  const handleOnChange = (newValue) => {
    setUserCode(newValue);
    socket.emit('updateCode', newValue);
  }

  return (
    <div className="editor">
      <Editor
        value={userCode}
        theme={theme}
        options={{fontSize: fontSize}}
        language={lang}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default EditorBox;
