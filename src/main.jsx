import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'


import { BrowserRouter } from 'react-router-dom'
import {ReportCardApp} from './ReportCardApp.jsx'

import { store } from './store/store.js'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <Provider store={store}>
    
      < BrowserRouter >
              <ReportCardApp />
     </ BrowserRouter >
    
  </Provider>
  </React.StrictMode>,
)

