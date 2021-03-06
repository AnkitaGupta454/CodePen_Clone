import React,{useState,useEffect} from 'react'
import Editor from '../Editor/Editor'
import useLocalStorage from '../../Hooks/useLocalStorage'


function App() {
    const [html, setHtml] = useLocalStorage('html', '')
  const [css, setcss] = useLocalStorage('css', '')
  const [js, setjs] = useLocalStorage('js', '')
    const [srcDOC, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
   
    return (
        <>
        <div className="pane top-pane">
            <Editor
                language="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml}
            />
            <Editor
               language="css"
               displayName="CSS"
               value={css}
               onChange={setcss}
            />
            <Editor
               language="js"
               displayName="JS"
               value={js}
               onChange={setjs}
            />
        </div>
        <div className="pane">
            <iframe
            srcDOC={srcDOC}
            title="Code_Output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
            frameBorder="0"
            />
        </div>
        </>
    )
}

export default App
