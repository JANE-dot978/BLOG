import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/Blogdetails';
// import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


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

            <Route path="/create">
            <Create/>
            </Route>

            <Route path="/BlogDetails/:id">
            <BlogDetails/>
            </Route>

            {/* <Route path="*">
              <NotFound/>
            </Route> */}

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
