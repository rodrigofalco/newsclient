import React from 'react';
import ReactDOM from 'react-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import './index.css';
import { NewsContextProvider } from './context/NewsContextProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <NewsContextProvider value={{ newsList: [] }}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </NewsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
