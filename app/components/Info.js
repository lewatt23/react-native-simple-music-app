import React from 'react'
import { 
  StyleSheet, 
  Text, 
  Image,
  View,
  StatusBar,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator

} from 'react-native';
import {Input,Button,SearchBar,Card,ListItem,Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormLabel, FormInput  } from 'react-native-elements';
import {Spinner} from './Spinner';



export default class Info extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
          isLoadinginfo: true,
          userinformation:null
        };
    }

OnSignup(){
  const {email_reg,password_reg} = this.state;

};







componentWillMount(){
    let Username =this.props.name ;
    console.log(Username);
    const Url ='http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+ Username.trim() +'&api_key=6c7d9cc25f736cfaf7a3fc4983b89f45&format=json&limit=25';
    
    //Start getting the first batch of data from reddit
    fetch(Url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
         isLoadinginfo:false,
         userinformation:responseJson.artist
        });
        console.log(this.props.name);
       // console.log(artiseinfo);
      })
      .catch(error => {
        console.error(error);
      });
  }





  render() {
  
    
        if (this.state.isLoadinginfo) {
      return (
        <View >
    
          <ActivityIndicator size="large" />
        </View>
      );
    }else{
      return(
         <View>
   <Card title={this.state.userinformation.name }>
  
    
     
        <View  style={styles.user}>
       
        <Image
           style={{
             paddingBottom:10,
            width: 150,
            height: 150,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' }}
            source={{ uri: this.state.userinformation.image[3]['#text']  }}
          />
       
          <Text style={styles.name}>{this.state.userinformation.bio.summary}</Text>
        </View>
   
</Card>



         </View>
      );
  
    }
         
        
  
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

