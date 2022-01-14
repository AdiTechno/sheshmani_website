import React from 'react'
import './Head.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
export default function Banner1() {
    return (
        <div classNam="container">
            <div className="row ban">
            
                    <h3>-----</h3>
                                    
                
                <div className="col section-heading">
                    
                    <h3>Notification Which May Impact You</h3>
                                    
                </div>
                <div className="col section-heading">
                    
                    <h3 style={{textAlign:'left'}}>Why Choose Us</h3>
                    
                    <div className="row">
                    <div className="col ">
                        <a href="#" className="media-icon"> 
                        <FontAwesomeIcon icon={faCircle} size='3x'/>
                        </a>
                    </div>
                       <div className="col section-heading">
                            <h4 style={{textAlign:'left'}}> 500 + Satisfied Client</h4>
                            <p style={{textAlign:'left'}}>Client retention of more than 95%.</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                    <a href="#" className="media-icon"> 
                        <FontAwesomeIcon icon={faCircle} size='3x'/>
                        </a>
                   </div>
                        <div className="col section-heading">
                            <h4 style={{textAlign:'left'}}> Client Support System</h4>
                            <p style={{textAlign:'left'}}>Superb implementation and service support strategly.</p>
                        </div> 
                    </div>
                    <div className="row">
                    <div className="col">
                   <a href="#" className="media-icon"> 
                        <FontAwesomeIcon icon={faCircle}size='3x'/>
                        </a>
                   </div>
                        <div className="col section-heading">
                            <h4 style={{textAlign:'left'}}> Hybrid Software System</h4>
                        <p style={{textAlign:'left'}}> Work Offline be present online.</p>
                        </div>  
                    </div>             
                </div>

            </div>
           </div>
    )
}
