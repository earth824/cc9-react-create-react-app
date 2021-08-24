import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';
import Login from './pages/Login';
import { useState } from 'react';

// '/' render Home
// '/contact' render ContactUs
// '/product' render Product
function App() {
  const [state, setState] = useState('state from App');
  return (
    <div style={{ padding: '4rem' }}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={{ pathname: '/' }}>Home</Link>
            {/* <a href="/">Home</a> */}
          </li>
          {/* <li>
          <a href="/" onClick={e => e.preventDefault()}>Home a tag</a>
        </li> */}
          <li>
            <Link to="/CONTACT/aba">Contact Us</Link>
          </li>
          <li>
            <Link to="/product/2">Product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Switch>
          {/* /abcd /product /about-us /contactor */}
          {/* /CONTACT */}
          <Route path="/contact" component={ContactUs} />
          <Route path="/contact" render={props => <ContactUs state={state} {...props} />} />
          {/* /product/2 , id is 2*/}
          <Route path="/product/:id" component={Product} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
