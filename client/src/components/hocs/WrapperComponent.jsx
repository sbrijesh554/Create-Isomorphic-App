import React from 'react';

export const WrapperComponent = (WrappedComponent) =>
{
return class HighOrderComponent extends React.Component{
    constructor(props){
        super();
    }

    
    //do any resuable logic
    render(){
        return (
            <WrappedComponent {...props}>

            </WrappedComponent>
        )
    }
}

} 