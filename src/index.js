import React from "react";
import ReactDom from 'react-dom'

import './scss/app.scss'

import App from './App'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)