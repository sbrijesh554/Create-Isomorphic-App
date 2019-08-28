import React from './node_modules/react';
export const hoc = (Comp) => {
    return class extends React.Component{
        render(){
            return(
                <Comp name="Brijesh"  />
            )
        }
    }
}