import 'configuration'

import 'react-toastify/dist/ReactToastify.css'
import './main.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'

const container = document.getElementById('root')

const root = createRoot(container as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

serviceWorker.unregister()

reportWebVitals()
