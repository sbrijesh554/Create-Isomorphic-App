import React from 'react';

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        //todo send error log to error service
        this.setState({
            hasError: true,
            error,
            errorInfo
        })
    }

    render(){
        if(this.state.hasError){
            return (
            <React.Fragment>
              <h1>Something went wrong!</h1>
              <p>{this.state.error && this.state.error.toString()}</p>
                
                <p>{this.state.errorInfo.componentStack}</p>
            </React.Fragment>
            )
        }
        return this.props.children;

    }
}