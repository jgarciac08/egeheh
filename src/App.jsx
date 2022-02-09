import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import { MenuNavegacion } from './data/MenuNavegacion';

export function App() {
  return (
    <Router>
      <BarraNavegacion />      
      {MenuNavegacion.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}