import React from 'react'
import './login.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { add,sub } from '../../redux/actions'

 function ReactTest(props) {

    const[chvalues,setChvalues]=useState(0);
   
    function ivalue()
    {
        setChvalues(chvalues + 1);
      
    }
    function dvalue()
    {
        setChvalues(chvalues - 1);
      
    }
    return (
        <div className="container">
        <div className="row>">
        <br />
            <h2> React Test Here..........</h2>
        </div>
        <br />
        <div className="row">
            <div className="row">
                <label >{chvalues}</label>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="btn">
                    <input type="submit" onClick={ivalue} className="btn btn-primary" value="+" />
                    <input type="submit" onClick={dvalue}  style={{marginLeft:15}} className="btn btn-danger" value="-" />
                </div>
            </div>
        </div>
        <br/><br/><br/>
        <div className="row>">
        <br />
            <h2> Redux Test Here..........</h2>
        </div>
        <br />
        <div className="row">
            <div className="row">
                <label >{props.value}</label>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="btn">
                    <input type="submit" onClick={props.add} className="btn btn-primary" value="+" />
                    <input type="submit" onClick={props.sub}  style={{marginLeft:15}} className="btn btn-danger" value="-" />
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add:() =>dispatch(add()),
        sub:() =>dispatch(sub())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReactTest)