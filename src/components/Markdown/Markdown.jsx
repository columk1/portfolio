import he from 'he'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('ts', ts)
SyntaxHighlighter.registerLanguage('css', css)

const Markdown = ({ markdownString }) => {
  const markdown = he.decode(markdownString)
  return markdown ? (
    <ReactMarkdown
      children={markdown}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          const useInlineStyles = match ? match[1] !== 'html' : true
          return match ? (
            <SyntaxHighlighter
              {...rest}
              // Remove inlineStyles to assign classes instead
              useInlineStyles={useInlineStyles}
              PreTag='div'
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={materialOceanic}
              customStyle={{
                margin: '0',
                lineHeight: '1.6',
                fontSize: '0.9rem',
                // backgroundColor: '#eee',
                fontWeight: '400',
              }}
              codeTagProps={{
                style: {
                  lineHeight: '1.6',
                  fontSize: '0.9',
                  fontWeight: '400',
                },
              }}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        },
      }}
    />
  ) : null
}

export default Markdown
