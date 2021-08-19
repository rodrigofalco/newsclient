import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';
import NewsPage from './pages/News';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news/:newsId">
            <NewsPage />
          </Route>
          <Route path="/category/:categorySlug">
            <CategoryPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
