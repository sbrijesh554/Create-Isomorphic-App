import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import authStore from '../../config/AuthStore';
import ErrorBoundary from './ErrorBoundary/ErrorBoundry.jsx';

const PrivateRoutes = ({component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => {
        if(authStore.isAuthenticated === true){
          return <ErrorBoundary><Component {...props}/></ErrorBoundary>
        }else{
          <Redirect to={{pathname:'/login', state: { from: props.location }}} />
        }
      
      }}  
    />
)

class App extends React.Component {

  constructor(props){
    super(props);

  }

  updateAuthStore = (data) => {
    authStore.token = data.token;
  }
 
  render(){
        return (
            <Switch>
               
                <Route path={["/","/login"]}
                render={(props) => <ErrorBoundary><Login {...props} updateAuthStore={this.updateAuthStore} /></ErrorBoundary>}/>
                <PrivateRoutes path='/dashboard' component={Dashboard}/>

            </Switch>
      );
  }
};

export default App;