import './App.scss'
import MarkdownProvider from './provider/markdown.tsx'
import MainLayout from './components/layouts/main-layout'
import Editor from './components/editor/editor'
import Preview from './components/preview/preview.tsx'

function App() {
  return (
    <>
      <MarkdownProvider>
        <MainLayout>
          <MainLayout.Column>
            <Editor />
          </MainLayout.Column>
          <MainLayout.Column>
            <Preview />
          </MainLayout.Column>
        </MainLayout>
      </MarkdownProvider>
    </>
  )
}

export default App
