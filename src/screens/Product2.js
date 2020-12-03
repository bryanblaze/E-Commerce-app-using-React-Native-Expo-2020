import React from 'react'
import {View,Image,Picker, Text} from 'react-native'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/Product'
import Select from '../components/Select'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default class Product2 extends React.Component{
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
                        }}>Clothes</Text>
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
                         image={require("../images/dress1.jpeg")}
                         title="Jack n Jones Red Suit"
                         price="12000"
                        
                    />
                    <Product
                         image={require("../images/dress2.jpg")}
                         title="Zara white Striped"
                         price="₹1100"
                         marginTop={25}
                         onPress={() => this.props.navigation.navigate('Detail5')}
                    />
                </View>
                <View style={{
                    flexDirection:"row",
                    marginHorizontal:15,
                    marginTop:30,
                }}>
                    <Product
                         image={require("../images/dress3.png")}
                         title="Raymonds Black "
                         price="₹12300"
                         onPress={() => this.props.navigation.navigate('Detail6')}
                    />
                    <Product
                         image={require("../images/dress03.png")}
                         title="Highland Trousers"
                         price="₹900"
                         marginTop={25}
                    />
                </View>

            
        </ScrollView>
     
     )

 }
}