import {  useState } from 'react';
import MarkdownContext from './markdown-context';

// TS Type import
import { ReactNode } from 'react';

const MarkdownProvider = ({ children }: { children: ReactNode }) => {
    const [markdown, setMarkdown] = useState('');

    return (
        <MarkdownContext.Provider value={[markdown, setMarkdown]}>
            {children}
        </MarkdownContext.Provider>
    );
};

export default MarkdownProvider;