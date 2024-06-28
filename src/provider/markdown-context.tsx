import { createContext } from 'react';

const MarkdownContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['', () => { }]);

// This runs into issues with Vite's HMR updates, even seperating context from the provider 
// doesn't help.
// But its just syntactic sugar, so we can just use the context directly

// export const useMarkdown = () => {
//     return useContext(MarkdownContext);
// }

export default MarkdownContext;