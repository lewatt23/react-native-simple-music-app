import React from 'react';
import  {reduxForm} from 'redux-form';
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
import {Input,Button,SearchBar,Card,ListItem,Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon } from 'react-native-elements';
import { FormLabel, FormInput  } from 'react-native-elements';
import {Spinner} from './Spinner';
import firebase from 'firebase';
import {authUser} from '../actions'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';


export class Login extends React.Component {
  
 
  state = {
    email:'',
     password:'',
     error:'',
     loading:false
};
OnSignIn(){
  var  {email,password} = this.state;

  this.setState({error:'',loading:true});
 

 firebase.auth().signInWithEmailAndPassword(email.trim(),password)
 .then(() =>{
   console.log('login');

   setTimeout(() =>{

  this.setState({error:'',loading:false,email:'',password:''});
  
    this.props.dispatch(authUser);
    Actions.news();
   

  },1000);
     
 })
 .catch((error) =>{
  console.log('failed');
  console.log(error);

    setTimeout(() =>{

      this.setState({error:'Authantication Failed ! Email or password  incorrect',loading:false,
     email:''});

   },1000)
      
 });
};

OnSignUp(){
  Actions.signup();
}

renderButton(){
  if(this.state.loading){
    return <Spinner/>;
  }

  return (
  <Button
         small
         buttonStyle={{backgroundColor:'#1565c0',borderRadius:25}}
         title='Login' 
         onPress={this.OnSignIn.bind(this)}
    />
  )

};



  render() {
    return ( 
      <View>
            <View>
         
         </View>
         <View>
         <FormLabel>Email</FormLabel>
         <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({email})} 
         style={styles.textInput}
         /> 
         <FormLabel>Password</FormLabel>
         <TextInput
         value={this.state.password}
         secureTextEntry={true}
         onChangeText={password => this.setState({password})} 
         style={styles.textInput}
         />
         <Text></Text>
         <Text></Text>
         <Text style={styles.failed}>{this.state.error}</Text>
         <Text></Text>
         {this.renderButton()}
         <Text></Text>
         <Text></Text>
         <Text></Text>
        <Button
         small
         buttonStyle={{backgroundColor:'#1565c0',borderRadius:25}}
         title='Signup'
         onPress={this.OnSignUp.bind(this)}
         />
         </View>
      </View>
      
    )
  }
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      paddingTop:20,
      backgroundColor:'#fff'
      

    },
    
    textInput :{
      alignSelf: 'center',
      width:320,
      marginLeft: 5,
      height: 40,
    },
    failed:{
      color:'red',
      marginLeft: 10,
    }
});

export default connect()(Login);
