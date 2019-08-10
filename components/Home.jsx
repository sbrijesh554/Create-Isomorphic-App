import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import styles from './styles.css';
import {getSampleData} from '../action';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.getSampleData();
    }

    render(){
        return (
            <div className = "">
                <div className = "col-xs-12 text-center">
                    <div className={`${styles.bold}`}>{this.props.sampledata}</div>
                    <button><Link to="/newview">new-view</Link></button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSampleData
},dispatch);

const mapStateToProps = (state) => {
    return ({
        sampledata: state.sampledata.sampledata
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);