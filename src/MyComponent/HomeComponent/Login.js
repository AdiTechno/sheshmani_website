import React from 'react'
import './login.css';
import { useEffect, useState } from 'react';
export default function Login() {

    const axios = require('axios').default;
// axios.get('https://reqres.in/api/products/3')
// .then(function (response) {
//   // handle success
//   console.log(JSON.stringify(response));
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
// .then(function () {
//   // always executed
// });



    const[username,setUsername]=useState("");
    const[pass,setPass]=useState("");
    function login()
    {
        // https://reqres.in/api/login
        console.warn(username,pass)
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
        
          const body = JSON.stringify({ username, pass });
        
            // Make a request for a user with a given ID

            axios.post('http://mobapp.babujiconventschool.com/api/Staff/Slogin',body,config)
              .then(function (response) {
                console.log(JSON.stringify(response));
              })
              .catch(function (error) {
                console.log(JSON.stringify(error));
               
              });   

        
    }
    return (
        <div className="rowstyle">


            <div className="container">
                <div className="row>">
                <br />
                    <h2> Login Here..........</h2>
                </div>
                <br />
                <div className="row">
                    <div className="row">
                        <div className="col labelalign">
                            <label> User Name</label>
                        </div>
                        <div className="col textlign">
                            <input type="text" 
                            onChange={(e)=>setUsername(e.target.value)}
                             name="username" />
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col labelalign">
                            <label> Password</label>
                        </div>
                        <div className="col textlign">
                            <input type="password" 
                            onChange={(e)=>setPass(e.target.value)}
                            name="pass" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="btn">
                            <input type="submit" onClick={login} className="btn btn-primary" value="Login" />
                        </div>

                    </div>
                    <br />

                </div>
            </div>
        </div>
    )
}
