import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './router';
import { Helmet } from "react-helmet";

import './index.css';
import './brand_style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Helmet htmlAttributes={{ lang: "en" }}>
      <title>Haystacks</title>

      <meta name="description" content="Haystacks is led by a team of real estate professionals and technologists determined to unlock value for professional residential investors." />

      <meta property="og:url" content="https://haystacks.ai/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Haystacks" />
      <meta
        property="og:description"
        content="Haystacks is led by a team of real estate professionals and technologists determined to unlock value for professional residential investors."
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="haystacks.ai" />
      <meta property="twitter:url" content="https://haystacks.ai/" />
      <meta name="twitter:title" content="Haystacks" />
      <meta 
        name="twitter:description" 
        content="Haystacks is led by a team of real estate professionals and technologists determined to unlock value for professional residential investors." 
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Helmet>

    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
