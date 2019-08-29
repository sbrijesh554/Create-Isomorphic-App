import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import authStore from '../../config/AuthStore';

const PrivateRoutes = ({component: Component, ...rest}) => (
    <Route {...rest} render = {(props) => {
        if(authStore.isAuthenticated === true){
          return <Component {...props}/>
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
          <div>
            <Switch>
               
                <Route path={["/","/login"]}
                render={(props) => <Login {...props} updateAuthStore={this.updateAuthStore} />}/>
                <PrivateRoutes path='/dashboard' component={Dashboard}/>

            </Switch>
          </div>
      );
  }
};

export default App;