import React from 'react'
import './Head.css';
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import erp from '../images/lm3.png';
import mob from '../images/lm6.png';
import webs from '../images/lm8.png';
import sof from '../images/lm5.png';
import sms from '../images/lm7.png';
import logi from '../images/lm2.png';
export default function Header() {
  return (
    <div className="prod" style={{marginTop:150}}>
         <div className="container">
              
        
              <div className="row prod">
                <nav>
                  <ul className="codehim-menu cute-theme">
                    <li className="codehim-menu cute-theme">
                      <a href="#"> <img src={erp} /> School ERP</a>
                    </li>
                    <li className="codehim-menu cute-theme">
                      <a href="#"> <img src={mob} /> Mobile App</a>
                    </li>
                    <li className="codehim-menu cute-theme">
                      <a href="#"> <img src={webs} /> Website Designing</a>
                    </li>
                    <li className="codehim-menu cute-theme">
                      <a href="#"> <img src={sof} /> Software Development</a>
                    </li>
                    <li className="codehim-menu cute-theme">
                      <a href="#"> <img src={sms} />  SMS Service</a>
                    </li>
                    <li className="codehim-menu cute-theme">
                      <Link to="/login"> <img src={logi} /> Login</Link>
                    </li>
                  </ul>
                </nav>
              </div>
      
      
            </div>
      
    </div>
     
    
  )
}
