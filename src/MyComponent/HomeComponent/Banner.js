import React from 'react'
import './Head.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop,faUniversity,faLink } from '@fortawesome/free-solid-svg-icons'
import { faComments,faMobile,faCloud } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
    return (
        <div>
            <br/><br/>
            <div className="container">
           <div className="row">
               <br/>
               <h3>Our Services</h3>
               <br/>
           </div>
           <br/><br/>
           <div className="row">
               
               <div className="col">
               <a className="ho" href="#"> 
                        <div className="circle">
                            <FontAwesomeIcon icon={faDesktop } size='3x' color='rgb(86, 131, 182)'/>
                        </div>
                                            
                         <br/><br/>
                    <h4>Software Development</h4>
                </a>
                <p>
                Our Qualified and Experienced staff uses the latest quality assured techniques to deliver innovative CIM for easy updation.
                </p>
               
                   
               </div>
               <div className="col">
               <a className="ho" href="#"> 
               <div className="circle">
               <FontAwesomeIcon icon={faUniversity } size='3x' color='rgb(86, 131, 182)'/>
                </div>
                <br/><br/>
                <h4>School ERP/CRM</h4>
                </a>
                <p>
                Comprehensive Information Management Software including 30+ modules. Hybrid software using both Windows and Web.
                </p>
               </div>
               <div className="col">
               <div className="circle">
               <FontAwesomeIcon icon={faLink } size='3x' color='rgb(86, 131, 182)'/>
                   </div>
               
                <br/><br/>
                <h4>Website Designing</h4>
                <p>
                Website's design is of greatest significance for a successful presence on the web for your business.
                </p>
               </div>          
               <br/>
           </div>
           <div className="row">
               <div className="col">
               <div className="circle">
               <FontAwesomeIcon icon={faComments } size='3x' color='rgb(86, 131, 182)'/>
                   </div>
               
                <br/><br/>
                <h4>SMS Services</h4>
                <p>
                Sheshmani Info Solution pioneer in BULK SMS Solutions. Our mission is to provide a specialized, reliable, high quality, hassle free sophisticated Services with cost saving.
                </p>
               </div>
               <div className="col">
               <div className="circle">
               <FontAwesomeIcon icon={faMobile } size='3x' color='rgb(86, 131, 182)'/>
                   </div>
               
                <br/><br/>
                <h4>Mobile Application</h4>
                <p>
                Personalised School Mobile App with login for Student, Parent, Teacher & Management giving realtime information and alerts for latest happening at the school.
                </p>
               </div>
               <div className="col">
               <div className="circle">
               <FontAwesomeIcon icon={faCloud} size='3x' color='rgb(86, 131, 182)'/>
                   </div>
               
                <br/><br/>
                <h4>Domain & Hosting</h4>
                <p>
                SIS offers domains at very lowest price, we also offer web hosting service, linux web hosting, windows web hosting , windows 2000 web hosting, email and live chat solutions.
                </p>
               </div>          
               <br/>
           </div>
        </div>
        </div>
       
    )
}

