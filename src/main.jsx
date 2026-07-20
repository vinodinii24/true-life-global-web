import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0A1128] text-white antialiased">
      <App />
      
      {/* 🧪 DEBUG TEST ANIMATION: Floating Gold Radar Ping (top-left) */}
      <div 
        className="fixed top-4 left-4 z-[9999] pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#D4AF37] opacity-75 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FFD700]" />
      </div>
    </div>
  </StrictMode>,
)