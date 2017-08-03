import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import App from './components/App';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';
import CreatePost from './components/CreatePost';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
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
  , document.getElementById('root'));
registerServiceWorker();
