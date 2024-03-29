import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderContext from './context/OrderContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Order1 from './pages/Order1'
import Order2 from './pages/Order2'
import Order3 from './pages/Order3'
import Order4 from './pages/Order4'
import OrderConfirm from './pages/OrderConfirm'
import Agradecimentos from './pages/Redirect';

import GlobalStyle from './styles/globalStyles';

const defaultOrderValues = { 
  tamanho: '',
  casca: '',
  recheio: [],
  adicional: [],
  valorAdicional: 0,
  nome: '',
  pagamento: 'Pix',
  valor: 0,
};

function App() {

  const [ order, setOrder ] = useState(defaultOrderValues);

  return (
    <OrderContext.Provider value={{order, setOrder}}>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup className='transitionBox'>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/order1" component={Order1} />
                  <Route exact path="/order2" component={Order2} />
                  <Route exact path="/order3" component={Order3} />
                  <Route exact path="/order4" component={Order4} />
                  <Route exact path="/confirm" component={OrderConfirm} />
                  <Route exact path="/redirect" component={Agradecimentos} />
                  <Route exact path="*" component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
      <GlobalStyle />
    </OrderContext.Provider>
  );
}

export default App;
