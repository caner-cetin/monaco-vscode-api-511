import React, { useState, useEffect, useRef } from 'react'
import '@codingame/monaco-vscode-python-default-extension';
import { MonacoEditorLanguageClientWrapper } from 'monaco-editor-wrapper'
import { VSConfig } from '../editor/python'

export default function MonacoPage() {
  const editorRef = useRef<MonacoEditorLanguageClientWrapper | null>(null);

  const [editorReady, setEditorReady] = useState(false);
  const wrapper = new MonacoEditorLanguageClientWrapper();
  const wrapperConfig = VSConfig('/workspace', "print('Hello, World!')", '/workspace/script.py', {
    lspHost: 'localhost',
    lspPort: 8080,
    lspPath: 'lsp/pyright',
    lspSecured: false,
  });
  useEffect(() => {
    const initEditor = async () => {
      if (editorRef.current) return;
      await wrapper.init(wrapperConfig);
      await wrapper.start();
      setEditorReady(true);
    };
    initEditor();
  }, [wrapper, wrapperConfig]);

  return (
    <div className="min-h-screen bg-[#211e20] text-[#e9efec] font-mono flex flex-col">
      <div id="monaco-editor-root" style={{ height: '100vh', maxWidth: '130vh' }} />
    </div>
  )
}