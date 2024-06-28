import React, { useContext, useState } from 'react';
import markDownContext from '../../provider/markdown-context';
import TitleBar from '../title-bar/title-bar';

const Editor = () => {
    const [markdown, setMarkdown] = useContext(markDownContext);
    const [words, setWords] = useState(0);
    const [characters, setCharacters] = useState(0);

    const getWordCount = (text: string) => {
        // TODO: Prio: LOW - implement better logic for multiple languages
        const wordsArray = text.match(/\b\S+\b/g);
        return wordsArray ? wordsArray.length : 0;
    }

    const getCharCount = (text: string) => {
        return text.length;
    }

    const updateMarkdown = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;

        setMarkdown(value);
        setWords(getWordCount(value));
        setCharacters(getCharCount(value));
    }

    const downloadFile = () => {
        const link = document.createElement('a');
        const file = new Blob([markdown], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = 'Markdown Text.md';
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return (
        <div className="editor">
            <TitleBar
                title="Editor"
                aside={`${words} words | ${characters} characters`}
            />
            <textarea
                className="editor__textarea"
                placeholder="Start typing..."
                value={markdown}
                onChange={updateMarkdown}
            />
            <button className="editor__download-button"onClick={downloadFile}>Download As File</button>
        </div>
    )
}

export default Editor;