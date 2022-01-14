import logo from './logo.svg';
import './App.css';
import Head1 from './MyComponent/HomeComponent/Head1'
import Head2 from './MyComponent/HomeComponent/Head2'
import Header from './MyComponent/HomeComponent/Header'
import Banner from './MyComponent/HomeComponent/Banner'
import Banner1 from './MyComponent/HomeComponent/Banner1'
import Login from './MyComponent/HomeComponent/Login'
import ReactTest from './MyComponent/HomeComponent/ReactTest'
import About from './MyComponent/HomeComponent/About'
import Democarousel from './MyComponent/HomeComponent/Democarousel'
import Getintouch from './MyComponent/HomeComponent/Getintouch'
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
          
     
     
     <Router>
          <Head1 />
          <Head2 />
          <Header />
          
          <Switch>
          <Route path="/about">
            <About />
            </Route>
            <Route path="/login">
            <Login />
            </Route> 
            <Route path="/rtest">
            <ReactTest />
            </Route> 
            <Route path="/">
            <Democarousel /> 
            <Banner />
            <Banner1 />
            <Getintouch/>
            </Route>
          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
