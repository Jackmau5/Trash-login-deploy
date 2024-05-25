import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router/router.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
  </React.StrictMode>,
)
