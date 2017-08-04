import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import App from './components/App';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';
import CreatePost from './components/CreatePost';
import registerServiceWorker from './registerServiceWorker';
import Posts from './reducers/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(Posts, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/create" component={CreatePost} />
          <Route path="/show/:id" component={ShowPost} />
          <Route path="/show" component={PostList} />
          <Route path="/" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
