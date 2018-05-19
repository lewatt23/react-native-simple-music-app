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
import {Input,Button,SearchBar,Card,ListItem,Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon } from 'react-native-elements';
import { FormLabel, FormInput  } from 'react-native-elements';
import {Spinner} from './Spinner';
import firebase from 'firebase';



export default class Signup extends React.Component{  
  state = {
    email_reg:'',
     password_reg:'',
     error_reg:'',
     passed:'',
     loading:false
};
OnSignup(){
  const {email_reg,password_reg} = this.state;

  this.setState({error:'',loading:true});

 firebase.auth().createUserWithEmailAndPassword(email_reg.trim(),password_reg)
 .then(()=>{
  setTimeout(() =>{

    this.setState({passed:'Account created',loading:false,password_reg:'',email_reg:''});

 },1000)
    
 })
 .catch(() => {
    setTimeout(() =>{

      this.setState({error:'Account not created try again',loading:false});

   },1000)
      
 });
};


renderButton_reg(){
  if(this.state.loading){
    return <Spinner/>;
  }

  return (
    <Button
    small
    buttonStyle={{backgroundColor:'#1565c0',borderRadius:25}}
    title='Register'
    onPress={this.OnSignup.bind(this)}
   
   />
  );

};

  render() {
    return (
      <View>
          <View>
        
         </View>
         
        <View>
         <FormLabel>Email</FormLabel>
         <TextInput
          value={this.state.email_reg}
          onChangeText={email_reg => this.setState({email_reg})} 
         style={styles.textInput}
         />
         <FormLabel>Password</FormLabel>
         <TextInput
          value={this.state.password_reg}
          onChangeText={password_reg => this.setState({password_reg})} 
          secureTextEntry={true}

         style={styles.textInput}
         />
         
         <Text></Text>
         <Text style={styles.failed}>{this.state.error}</Text>
         <Text style={styles.passed}>{this.state.passed}</Text>

         <Text></Text>
         <Text></Text>
            
            {this.renderButton_reg()}
        
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
    failed:{
      color:'red',
      marginLeft: 10,
    }, textInput :{
      alignSelf: 'center',
      width:320,
      marginLeft: 5,
      height: 40,
    },passed:{
      color:'green',
      marginLeft: 10,
    }
});

