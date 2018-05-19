import React from 'react';
import  {reduxForm} from 'redux-form';
import { 
  StyleSheet, 
  Text,
  View,
  StatusBar,
  Image,
  ListView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
//import  {FlatList} from 'react-native-gesture-handler';
import {Input,Button,SearchBar,Card,ListItem,Header,List} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon } from 'react-native-elements';
import {unauthUser} from '../actions'
import {authUser} from '../actions'

//import { FormLabel, FormInput,Card, ListItem, Button   } from 'react-native-elements';
import {Spinner} from './Spinner';
import firebase from 'firebase';
import { FlatList, NativeViewGestureHandler } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

  
const users = [ ] ;

var str = '#text';
export class Feed extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        dataSource: null,
        isLoading: true
      };
  }
  logout = () =>{      
    this.props.dispatch(unauthUser);
    Actions.auth();
}


  componentWillMount(){
    //enter  api  key  below
    const key = '';
    const Url ='http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key='+key +'&format=json&limit=12';
    
    //Start getting the first batch of data from reddit
    fetch(Url)
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState({
          dataSource: ds.cloneWithRows(responseJson.artists.artist),
          isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  Renderinfo(){

    if (this.state.isLoading) {
      return (
        <View >
    
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
       
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => {
            return (
              <View style={styles.listItem}>
              
               <View style={styles.imageWrapper}>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{
                      uri:  rowData.image[1]['#text'] === ""
                        ? "https://via.placeholder.com/70x70.jpg"
                        : rowData.image[1]['#text']
                        
                    }}
                  />
                </View> 
                <View style={{ flex: 1 }}>
                <TouchableOpacity
              onPress={() => {Actions.info({name:rowData.name})}}
              >
                  <Text style={styles.title}>
                    {rowData.name}
                  </Text>
                  <Text style={styles.subtitle}>
                   Playcount : {rowData.playcount}
                  </Text>
                  </TouchableOpacity>

                </View>

            
              </View>
          
            );
          }}
        />
      );
    }

  }


  render() {
    return (
    <View >
    <View>
   <View style={{
     flex: 1,
    justifyContent: "center",
   }}>
  
    
     
   </View>
   <View >
     <TouchableOpacity
      style={{textAlign:'left',fontSize:16,padding:14,
     backgroundColor:"#fcfcfc"
    }}
     onPress={this.logout.bind(this)}
     >
     
     <Text style={{color:"#000", textAlign:"center",fontSize:16}}>

           logout
     </Text>

     </TouchableOpacity>
   </View>


    </View>

   <View>
{this.Renderinfo()}

   </View>


    </View>
    );
      
  
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d6d7da",
    padding: 6
  },
  imageWrapper: {
    padding: 5
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    margin: 6
  },
  subtitle: {
    fontSize: 10,
    textAlign: "left",
    margin: 6
  }
});



export default connect()(Feed);
