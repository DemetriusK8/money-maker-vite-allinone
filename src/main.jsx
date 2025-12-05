import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// --- Pinterest Tag setup ---
function initPinterestTag() {
  // Make sure we're in the browser, not during any server-side build
  if (typeof window === 'undefined') return;

  (function (e) {
    if (!window.pintrk) {
      window.pintrk = function () {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments))
      }
      const n = window.pintrk
      n.queue = []
      n.version = '3.0'

      const t = document.createElement('script')
      t.async = true
      t.src = e

      const r = document.getElementsByTagName('script')[0]
      r.parentNode.insertBefore(t, r)
    }
  })('https://s.pinimg.com/ct/core.js')

  window.pintrk('load', '2612412658221')
  window.pintrk('page')
}

// Run the Pinterest tag once when the app starts
initPinterestTag()

// --- React app mount ---
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


