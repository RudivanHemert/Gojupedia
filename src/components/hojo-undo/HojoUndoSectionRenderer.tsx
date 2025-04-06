import React from 'react';
import ReactMarkdown from 'react-markdown';
// Optional: Import remark/rehype plugins for more features
// import remarkGfm from 'remark-gfm'; 

interface MarkdownRendererProps {
  markdownContent: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownContent }) => {
  return (
    <div className="prose prose-stone dark:prose-invert max-w-none">
      <ReactMarkdown
        // plugins={[remarkGfm]} // Example plugin usage
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 