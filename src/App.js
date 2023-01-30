import React from 'react';
import './App.css';
import Nav from './Nav.js'
import Register from './register'
import Profile from './profile';
import Login from './Login';
function App() {
  return (
    <div>
      <Nav/>
      <Login/>
      <Register/>
      {/* <Profile/> */}

      {/* <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router> */}


    </div>
  );
}

export default App;
