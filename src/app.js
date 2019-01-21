<<<<<<< HEAD
import AppBase, {$api, $config, $store,DashBoard} from '#';
import {HashRouter as Router, Route} from 'react-router-dom';

import Login from './login';
import Admin from './admin';
=======
import { ReduxAppBase } from 'next-react-redux';
import { $api, $config, $store } from '#';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
>>>>>>> 0c35f5412eed4c2c3a3aba7f8a69cf453cbb37d1
import hotable from 'react-hmr-decorator';
import routes from './routes';

@hotable(module)
export default class extends ReduxAppBase {
  static initialState(inStore) {
    const { login } = inStore.local;
    return {
      local: {
        login: login || null
      },
      session: {
        testSs: 'fei'
      },
      memory: {
        modalUser: false,
        modalUserQuery: false,
        orders: {},
        users: {}
      }
    };
  }

  componentDidMount() {
    nx.$memory = {
      history: this.root.history
    };
  }

  eventBus(inName, inData) {
    console.log('*, I am - global event bus center:->', inName, inData);
  }

  render() {
    return (
      <Router ref={(root) => (this.root = root)}>
<<<<<<< HEAD
        <section className="route-wrapper">
          {/*<Route exact path="/" component={Login}/>*/}
          <Route exact path="/" component={DashBoard}/>
          <Route path="/modules" component={Admin}/>
        </section>
=======
        <Switch>{renderRoutes(routes)}</Switch>
>>>>>>> 0c35f5412eed4c2c3a3aba7f8a69cf453cbb37d1
      </Router>
    );
  }
}
