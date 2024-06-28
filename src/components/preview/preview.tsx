import { useContext } from 'react';
import markDownContext from '../../provider/markdown-context';
import TitleBar from '../title-bar/title-bar';
import ReactMarkdown from 'react-markdown';

const Preview = () => {
    const [markdown] = useContext(markDownContext);

    return (
        <div className="preview">
            <TitleBar title="Preview" aside="" />
            <div className="preview__content">
                <ReactMarkdown className="react-markdown-render">
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}


export default Preview;