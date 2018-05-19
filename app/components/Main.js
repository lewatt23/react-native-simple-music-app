import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase';
import {Header} from 'react-native-elements';
import {connect} from 'react-redux';
import  Login  from './Login';
import Signup from './Signup';
import  Feed from './Feeds';
import createReactClass from 'create-react-class';
import Routes from './Router';

export default class Main extends React.Component{


  constructor(props, context) {
    super(props, context);
 
  }
    componentWillMount(){
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyDQ82xbtnlD5aZPpNiFB8xoh8vgtgkft-E',
          authDomain: 'artisewidme.firebaseapp.com',
          databaseURL: 'https://artisewidme.firebaseio.com',
          projectId: 'artisewidme',
          storageBucket: 'artisewidme.appspot.com',
          messagingSenderId: '836826567040'
        }
      );  
    };

  render() {
    
return(
  <Routes/>

);
  //    if(this.props.Login){
  //       return( 
        
  //        <Feed/>
         
  //     );
  //    }else{
  //         return(<Login/>);
  //    } 
    
   }
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      paddingTop:20,
      backgroundColor:'#fff'
      

    }
});

var mapStateToProps  = (state) => {
  return {
   Login:state.auth.Login
  };
}

module.exports = connect(mapStateToProps)(Main);
