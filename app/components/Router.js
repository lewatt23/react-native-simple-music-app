import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import  Login  from './Login';
import Signup from './Signup';
import  Feed from './Feeds';
import  Info from './Info';

class Routes extends React.Component{
    render(){
  
    return (
        <Router
        
        sceneStyle={{paddingTop:100}}
        titleStyle={{color:"white"}}
        navigationBarStyle={{backgroundColor:'#1565c0',
        color:"white",
        height:60}}>

        
        <Scene key="auth">
        <Scene key="login" component= {Login} title="Login" />
        <Scene key="signup"
        backButtonTextStyle={{color:"#fff"}}
        component = {Signup}  title="Sign Up"/> 
        </Scene>    
        <Scene key="news">
        <Scene key="feed" component = {Feed} title="Top charts" />  
        <Scene key="info" component = {Info}  title="Artise Info"/>

        </Scene>
        
        
        </Router>
    );
};
 };

 export default  Routes; 