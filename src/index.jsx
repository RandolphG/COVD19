import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store, { history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { AnimatePresence } from 'framer-motion';
import {
  Cover,
  Scroll,
  Modal,
  Menu,
  Carousel,
  ErrorBoundary,
  AnimatedBackground,
} from './components';
import style from './style';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <ErrorBoundary>
          <style.Container key="main">
            <Menu />
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route key={`selected-landing`} exact path={`/`} render={() => <Cover />} />} />
                    <Route
                      key={`selected-carousel`}
                      path={`/carousel`}
                      render={() => <Carousel />}
                    />
                    } />
                    <Route key={`selected-scroll`} path={`/scroll`} render={() => <Scroll />} />} />
                  </Switch>
                </AnimatePresence>
              )}
            />
            <AnimatedBackground />
            <Modal />
          </style.Container>
        </ErrorBoundary>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
