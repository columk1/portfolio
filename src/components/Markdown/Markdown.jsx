import he from 'he'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('js', js)
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
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag='div'
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={vscDarkPlus}
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
