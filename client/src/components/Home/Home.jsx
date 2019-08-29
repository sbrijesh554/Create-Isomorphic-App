import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import styles from './styles.css';
import {getSampleData, saveUserDetails} from '../../redux/action';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.name = React.createRef();
        this.age = React.createRef();
        this.mobileNumber = React.createRef();
    }
    
    componentDidMount(){
        //this.props.getSampleData();
    }

    submitUserDetails = () => {
        event.preventDefault();
        this.props.saveUserDetails(
            {
                name:this.name.current.value,
                age:this.age.current.value,
                mobileNumber:this.mobileNumber.current.value
            }
            );
    }

    render(){
        return (
            <div className = "row">
                <div className = "col-xs-8 text-center">
                    <div className = "row">
                        <label className = "col-xs-4">Name: </label>
                        <input className = "col-xs-6" type = "text" ref = {this.name}></input>
                    </div>
                    <div className = "row">
                        <label className = "col-xs-4">Age: </label>
                        <input className = "col-xs-6" type = "text" ref = {this.age}></input>
                    </div>
                    <div className = "row">
                        <label className = "col-xs-4">Contact No: </label>
                        <input className = "col-xs-6" type = "text" ref = {this.mobileNumber}></input>
                    </div>
                    <div style={{'margin': '5px'}}>
                        <button onClick={this.submitUserDetails}>SUBMIT</button>
                    </div>
                    <div><span>{this.props.serverResponse}</span></div>
                </div>
                
                {/* <div className = "col-xs-12 text-center">
                    <div className={`${styles.bold}`}>{this.props.sampledata}</div>
                    <button><Link to="/newview">new-view</Link></button>
                </div> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSampleData,
    saveUserDetails: (data) => saveUserDetails(data)
},dispatch);

const mapStateToProps = (state) => {
    return ({
        sampledata: state.sampledata.sampledata,
        serverResponse: state.serverResponse.serverResponse
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);