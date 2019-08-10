import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import {fetchSampleData} from '../action';

class NewView extends React.Component{
    constructor(props){
        super();
    }
    
    componentDidMount(){
        this.props.fetchSampleData();
    }

    render(){
        return (
            <div className = {`${styles.bold} col-xs-12 text-center`}> 
                SAMPLE NEW VIEW
                <div>Some random number from server : {this.props.randomData}</div>
            </div>
        )
    }
}

//without bindactioncreator example
function mapDispatchToProps(dispatch) {
    return {
        fetchSampleData : () => dispatch(fetchSampleData())
    }
}

function mapStateToProps(state) {
    return {
        randomData: state.randomData.randomData
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewView);