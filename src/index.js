import React from 'react'
import ReactDom from 'react-dom'
import { App } from './App'
import ThemeProvider from './context/ThemeProvider'
import './styles/index.scss'

ReactDom.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
)
