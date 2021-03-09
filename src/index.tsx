import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'

console.log("NODE JS ENV", process.env.NODE_ENV);

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
