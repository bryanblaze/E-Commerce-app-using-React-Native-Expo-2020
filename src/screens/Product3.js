import React from 'react'
import {View,Image,Picker, Text} from 'react-native'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/Product'
import Select from '../components/Select'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default class Product3 extends React.Component{
    state={
        city:"Mumbai"
    }
    render(){
        
        

        return(
            
            <ScrollView style={{backgroundColor:"#FFF"}}>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginTop:40,
                marginHorizontal:20
            }}>
                <View style={{width:"10%"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Bill')}>
                       <Image 
                            source={require('../images/cart.png')}
                       />
                      </TouchableOpacity>
                </View>
                <View style={{
                    width:"80%",
                    alignItems:"center"
                }}>
                    <Picker
                     selectedValue={this.state.city}
                     style={{height:50,width:160}}
                     onValueChange={(itemValue,itemIndex)=>
                         this.setState({city:itemValue})
                     }
                    >
                        <Picker.Item
                         label="Los Angeles"
                         value="Los Angeles"
                         style={{fontWeight:"bold"}}
                        />
                         <Picker.Item
                         label="Mumbai"
                         value="Mumbai"
                         style={{fontWeight:"bold"}}
                        />
                         <Picker.Item
                         label="New Delhi"
                         value="New Delhi"
                         style={{fontWeight:"bold"}}
                        />
                    </Picker>
                </View>
                <View style={{width:"10%"}}>
                     <Icon name="magnifying-glass" size={30}/>
                </View>
            </View>
            
            
            <View style={{
                paddingHorizontal:20,
                marginTop:50
            }}>
                <Text style={{
                    fontSize:30,
                    fontWeight:"bold"
                }}>Products that</Text>
                <Text style={{
                    fontSize:30,
                    fontWeight:"bold"
                }}>meets your needs</Text>
            </View>


            <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
             style={{marginTop:40}}
            >
                  
<Select  
title="Footwear"
image={require('../images/shoes13.png')}
onPress={() => this.props.navigation.navigate('Product0')} 

style={{height:40,width:40}}
 />

<Select 
title="Vegetables" 
image={require('../images/12.png')}
style={{height:40,width:40}}
onPress={() => this.props.navigation.navigate('Product1')}  />      

<Select  
title="Clothes" 
image={require('../images/dress3.png')}
style={{height:40,width:40}}
 onPress={() => this.props.navigation.navigate('Product2')} />
<Select 
title="Mobile" 
image={require('../images/dev2.png')}
style={{height:40,width:40}}
  onPress={() => this.props.navigation.navigate('Product3')} />         
                   
           
           
           
              
         </ScrollView>
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
                        }}>Cellphones</Text>
                    </View>
                    <View style={{
                        width:"50%",
                        alignItems:"flex-end"
                    }}>
                        <Icon
                         name="dots-three-horizontal"
                         size={25}
                         color="#848385"
                        />
                    </View>
                </View>
               
               
                <View style={{
                    flexDirection:"row",
                    marginHorizontal:15,
                    marginTop:30,
                }}>
                    <Product
                         image={require("../images/dev2.png")}
                         title="Samsung S8"
                         price="₹23999"
                         onPress={() => this.props.navigation.navigate('Detail7')}
                    />
                    <Product
                         image={require("../images/dev3.png")}
                         title="Sony Experia"
                         price="₹23499"
                         marginTop={25}
                         onPress={() => this.props.navigation.navigate('Detail8')}
                    />
                </View>


                <View style={{
                    flexDirection:"row",
                    marginHorizontal:15,
                    marginTop:30,
                }}>
                    <Product
                         image={require("../images/onep.jpeg")}
                         title="One Plus 6t"
                         price="₹17990"
                         
                    />
                    <Product
                         image={require("../images/mob70.png")}
                         title="Iphone XS"
                         price="₹81000"
                         marginTop={25}
                    />
                </View>










        </ScrollView>
     
     )

 }
}