import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import "./index.css"
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center"/>
  </StrictMode>,
)
