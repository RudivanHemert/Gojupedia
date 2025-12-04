import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
    markdownContent: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownContent }) => {
    return (
        <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
