import React from 'react'
import './login.css';
export default function Getintouch() {
    return (
        <div className="footer-top">


            <div className="container">

                <div className="row>">
                    <h2> Get In Touch !</h2>
                </div>

                <h4>-----------</h4>
                <div className="row">
                    <div className="col-md-6">

                        <input type="text" placeholder="Name" name="enqname" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder="Organisation" name="orgname" className="form-control" />
                    </div>

                    <br /><br />

                    <div className="col-md-6">
                        <input type="text" placeholder="Email" name="email" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder="Address" name="address" className="form-control" />
                    </div>

                    <br /><br />

                    <div className="col-md-6">
                        <input type="text" placeholder="Contact" name="contact" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder="State" name="state" className="form-control" />
                    </div>

                    <br /><br />

                    <div className="col-md-12">
                        <textarea type="text" placeholder="Query" name="query" className="form-control"></textarea>
                    </div>
                </div>

                <br />

                <br />
            
                <div className="col-md-12">
                    <input type="submit" className="btn-primary form-control" value="Submit" />
                </div>

                     <br />

                    <br />

                    
            </div>
            <div   className="row">
                    <div className="col-md-6">
                        <p> Sheshmani Info Solution Pvt Ltd.</p>
                    </div>
                    <div className="col-md-6">
                        <p>9838129376, 9670189911</p>
                    </div>

                    <div className="col-md-6">
                        <p>N10-72/X-1-2, New Colony, DLW, Varanasi - 221004</p>
                    </div>
                    <div className="col-md-6">
                        <p>Sheshmani.service@gmail.com, Sheshmani.web@gmail.com</p>
                    </div>
            </div>
        </div>


    )
}
