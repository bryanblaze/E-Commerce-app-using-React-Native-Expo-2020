import React from 'react'
import {View,Text, Image} from 'react-native'
import {
    ScrollView,
    TouchableOpacity} 
    from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'


export default class Detail3 extends React.Component{
    state={
        quantity:1
    }

    addQuantity = (quantity) => {
        this.setState({quantity: this.state.quantity + 1});
    }
    subtractQuantity = (quantity) => {
      if (this.state.quantity > 0) {
        this.setState({quantity: this.state.quantity - 1});
      }
       
    }

    render(){
        return(
            <View style={{backgroundColor:"#FFF"}}>
               <ScrollView>
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginTop:40,
                       marginHorizontal:20
                   }}>
                       <View style={{width:"10%"}}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}
                            >
                                <Image
                                    source={require('../images/2.png')}
                                />
                            </TouchableOpacity>
                       </View>
                       <View style={{width:"80%",alignItems:"center"}}>
                            <View style={{
                                flexDirection:"row",
                                alignItems:"center",
                                alignSelf:"center"
                            }}>
                                <Image
                                    source={require('../images/3.png')}
                                    style={{height:25,width:20}}
                                />
                                <Text style={{
                                    paddingHorizontal:10,
                                    fontWeight:"bold",
                                    fontSize:16
                                }}>HOT !!</Text>
                            </View>
                       </View>
                       <View style={{width:"10%"}}>
                                <Icon
                                    name="heart"
                                    color="#f9dd7a"
                                    size={30}
                                />
                       </View>
                   </View>
                   <Image
                        source={require('../images/12.png')}
                        style={{
                            height:300,
                            width:300,
                            alignSelf:"center"
                        }}
                   />
                
                   <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       marginHorizontal:20,
                       marginTop:30
                   }}>
                       <View>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:25
                           }}>Tomatoes </Text>
                           <Text style={{
                               fontWeight:"bold",
                               fontSize:15,
                               color:"#a4a4a9"
                           }}>
                               B vendors
                           </Text>
                       </View>
                      <Text style={{
                          fontWeight:"bold",
                          fontSize:28,
                          marginLeft:80
                      }}>₹50/kg</Text>
                   </View>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:25,
                       marginTop:30,
                       marginLeft:120,
                       marginHorizontal:20
                   }}>
                       Discount
                   </Text>
                   
                   <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:20,marginHorizontal:20}}
                   >
                       <View style={{
                           
                           paddingHorizontal:12,
                           paddingVertical:8,
                           marginRight:10
                       }}>
                        <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:0,
                       marginHorizontal:20,
                       textAlign:"center",
                       marginLeft:94,
                       color:"red"
                   }}>
                     FLAT  55%
                   </Text>
                
                       </View>
                   </ScrollView>
                   <Text style={{
                       fontWeight:"bold",
                       fontSize:20,
                       marginTop:30,
                       marginHorizontal:20
                   }}>
                       Details
                   </Text>
                   <Text style={{
                       color:"#a4a4a9",
                       fontWeight:"bold",
                       fontSize:15,
                       marginTop:10,
                       marginHorizontal:20,
                       textAlign:"justify"
                   }}>
                       The B vendors provide best Tomatoesin the world to use fresh from farm.
                       Tomatoes are a significant source of umami flavor. The tomato is consumed in diverse ways, raw or cooked, in many dishes, sauces, salads, and drinks. While tomatoes are fruits—botanically classified as berries—they are commonly used as a vegetable ingredient or side dish.
                   </Text>
               </ScrollView>
               <View style={{
                   position:"absolute",
                   backgroundColor:"#000",
                   height:50,
                   width:50,
                   bottom:20,
                   alignItems:"center",
                   justifyContent:"center",
                   alignSelf:"center",
                   borderRadius:25
               }}>


                   <TouchableOpacity 
                   onPress={() => this.props.navigation.navigate('Bill')}>
                   <Icon
                    name="shopping-cart"
                    size={24}
                    color="#FFF"
                   />
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}
