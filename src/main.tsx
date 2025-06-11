import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ColorProvider } from './store/ColorStore.tsx'
import { ThemeProvider } from './store/ThemeStore.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </ThemeProvider>
  </StrictMode>,
)
