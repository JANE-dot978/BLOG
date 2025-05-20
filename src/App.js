import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import NotFound from './components/NotFound';
import BlogDetails from './components/blogdetail';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>

        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>

          <Route path="/Create">
          <Create/>
          </Route>

          <Route path="/Blog-details/:id">
          <BlogDetails/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch> 
      </div>
      </div>
      </Router>
  );
}

export default App;
