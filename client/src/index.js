import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginComponent from "./modules/login";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_KEY}>
    <LoginComponent />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

