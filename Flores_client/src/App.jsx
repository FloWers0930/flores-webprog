import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="articles" element={<ArticlePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App