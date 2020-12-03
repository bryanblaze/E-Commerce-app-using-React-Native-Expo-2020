import React from 'react'
import {
    View,
    Image,
    TouchableOpacity, 
    Text} from 'react-native'

export default class Select extends React.Component{
    render(){
        return(

            <TouchableOpacity
            onPress={this.props.onPress}
            style={{
                backgroundColor:"#f9dd7a",
                alignItems:"center",
                flexDirection:"row",
                backgroundColor:"#e5e4eb",
                marginHorizontal:15,
                borderRadius:25,
                
            }}
          >
            


            <View style={{
                alignItems:"center",
                flexDirection:"row",
                backgroundColor:"#e5e4eb",
                marginHorizontal:15,
                borderRadius:25,
                paddingVertical:5,
                paddingHorizontal:15
            }}>
                <Image
                source={this.props.image}
                 style={{height:40,width:40}}
                />
                <Text style={{
                    fontWeight:"bold",
                    fontSize:18,
                    paddingLeft:10
                }}>
                    {this.props.title}
                </Text>
         
            </View>
            </TouchableOpacity>
        )
    }
}

/*

 <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#f9dd7a",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>



                       <Image
                        source={require('../images/5.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Burgers
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/10.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Burrito
                       </Text>
                   </View>
  <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15,
                       
                   }} >
                       <Image
                        source={require('../images/7.png')}
                        style={{height:40,width:40}}
                         />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Salads
                       </Text>
                   </View>

                   <View style={{
                       alignItems:"center",
                       flexDirection:"row",
                       backgroundColor:"#e5e4eb",
                       marginHorizontal:15,
                       borderRadius:25,
                       paddingVertical:5,
                       paddingHorizontal:15
                   }}>
                       <Image
                        source={require('../images/6.png')}
                        style={{height:40,width:40}}
                       />
                       <Text style={{
                           fontWeight:"bold",
                           fontSize:18,
                           paddingLeft:10
                       }}>
                           Pizza
                       </Text>
                   </View>


*/