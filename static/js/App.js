import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LandingPage from './views/LandingPage';
import ApiContextProvider from './contexts/ApiContext';
import LangContextProvider from './contexts/LangContext';

function App() {
  return (
    <LangContextProvider>
      <Router>
        <ApiContextProvider>
          <Route path="/:streamer">
            <LandingPage />
          </Route>
        </ApiContextProvider>
      </Router>
    </LangContextProvider>
  );
}

export default App;
