import React from 'react'
import './Head.css';
import { Link} from 'react-router-dom'
import companyLogo from '../images/logo2018.png';
export default function Head2() {
    return (
      <div className="fixed-top logo" style={{marginTop:50}}>
           <div className="container">
            <div className="row logo">
          <div className="col banner">

            <img src={companyLogo} alt="MyLogo" heigt="75px" style={{ marginTop: 10 }} />

          </div>
          <div className="col menu">
            <nav class="navv">
              <Link class="nav-link active navv" aria-current="page" to="/">Home</Link>
              <Link class="nav-link navv" to="/about">About</Link>
              <a class="nav-link navv" href="#">Clients</a>
              <a class="nav-link navv" href="#">Review</a>
              <Link class="nav-link navv" to="/rtest">React Test</Link>
              <a class="nav-link navv" href="#">Contact</a>
              <a class="nav-link navv" href="#">Support</a>
            </nav>
          </div>

        </div>
        </div>
      </div>
       
    )
}
