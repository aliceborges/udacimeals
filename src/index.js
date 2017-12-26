import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import reducer from './reducers'

<<<<<<< HEAD
const store= createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
=======
const store= createStore(reducer)
>>>>>>> a9d25e9ddceb15dd1274f5f00c7be0be7cd4945b

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
