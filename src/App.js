import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';
import NewsPage from './pages/News';
import NavBar from './components/NavBar';

export default function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <Router>
      <div>
        <NavBar searchText={searchText} setSearchText={setSearchText} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news/:newsId">
            <NewsPage searchText={searchText} />
          </Route>
          <Route path="/category/:categorySlug">
            <CategoryPage />
          </Route>
          <Route path="/">
            <HomePage searchText={searchText} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
