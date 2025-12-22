import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/app/styles/index.css'
import {App} from "@/app/App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from '@/app/App.jsx'
// import '@/app/styles/index.css'
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )
