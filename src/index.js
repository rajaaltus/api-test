import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './app.css'

const client = Client.buildClient({
  storefrontAccessToken: '89b31bd7920137e015b3eccf093911b7',
  domain: 'rshopping-la.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
