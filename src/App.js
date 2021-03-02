import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './component/home';
import Profile from './component/profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      

      <Switch> 
        <Route path={['/' , '/home']} exact >   
          <Home />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
