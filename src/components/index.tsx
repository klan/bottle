import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import '../style/index.css';

const app = document.getElementById('root');
const root = createRoot(app);
app.removeAttribute('unresolved');

root.render(<App />);
