import React from 'react'
import {View,Image,Picker, Text} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"
import Out from '../components/checkcomp'
import Select from '../components/Select'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};



export default class Payment extends React.Component{
    state={
        city:"Mumbai"
    }
    render(){
        return(
      
              
                 
        <ScrollView>
                   <View style={{
                       alignItems:"center",
                       marginHorizontal:20,
                       flexDirection:"row",
                       marginTop:40
                   }}>
                       <View style={{
                           width:"50%"
                       }}>
                           <Text style={{
                               fontSize:22,
                               fontWeight:"bold"
                           }}>CHECKOUT </Text>
                       </View>
                       <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>
                         
                       </View>
                   </View>
                  
                  
                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>
                         <Out
                         image={require("../images/loc5.png")}
                         title="Set Delivery Location"
                      //   price="₹23499"
                         marginTop={25}
                         onPress={() => this.props.navigation.navigate('currentmap')}
                    />
                   <Out
                         image={require("../images/card1.png")}
                         title="Pay By Credit Card"
                       //  price="₹35000"
                         onPress={() => this.props.navigation.navigate('card')}
                    />
                   </View>

                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:15,
                       marginTop:30,
                   }}>
                      <Out
                            image={require("../images/pay1.png")}
                            title="Pay On Delivery"
                        //    price="₹90/kg"
                            marginTop={25}
                            onPress={() => 
                                
                               alert('Thank For your business,Your Product Will be Delivered within 2-3 Working Days !!')}
                       />
                      <Out
                         image={require("../images/cart4.png")}
                         title="Back to Cart"
                         //price="₹12300"
                         onPress={() => this.props.navigation.navigate('Bill')}
                    />
                   </View>
           </ScrollView> 
        )

    }
}