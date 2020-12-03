

import React from 'react';
import { View, Text,Image, FlatList, Button, SafeAreaView, processColor,StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Select from '../components/Select';



const products = [
  {   _id: 1, name: 'Gucciheel', price: 35000, quantity: 0 },
  
     {_id: 2, name: 'PythShoe', price: 1500, quantity: 0 },
    { _id: 3, name: 'NikeCasual', price: 3300, quantity: 0 },
    { _id: 4, name: 'NikeSports', price: 4500, quantity: 0 },
  { _id: 5, name: 'Tomato', price: 50, quantity: 0 },
  { _id: 6, name: 'AmLeaves', price: 100, quantity: 0 },
  { _id: 7, name: 'Broccoli', price: 120, quantity: 0 },
  { _id: 8, name: 'Onions', price: 90, quantity: 0 },
  { _id: 9, name: 'J&Jred', price: 12000, quantity: 0 },
  { _id: 10, name: 'ZaraWhite', price: 1100, quantity: 0 },
  { _id: 11, name: 'RayBlack', price: 12300, quantity: 0 },
  { _id: 12, name: 'HighTrou', price: 900, quantity: 0 },
  { _id: 13, name: 'Sams8', price: 23999, quantity: 0 },
  { _id: 14, name: 'SonyExp', price: 23499, quantity: 0 },
  { _id: 15, name: 'Oneplus 6t', price: 17990, quantity: 0 },
  { _id: 16, name: 'IphoXs', price: 81000, quantity: 0 }

];








class ListItem extends React.Component {
  render() 
  
  {
    const { item } = this.props;
    
    return (



<ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                   marginTop:40,
                   marginHorizontal:20 }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        
        <Select 
title={item.name} 
image={require('../images/cart.png')}
style={{height:10,width:10}}
 />     

    
          <Text>{item.price} ₹</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 0, alignItems: 'center' }}>
          <Button title="-" onPress={this.props.onSubtract} />
          <Text>{item.quantity}</Text>
          <Button title="+"  onPress={this.props.onAdd} />
        </View>
      </View>
      </ScrollView>
    )
  }
}

class App extends React.Component {
  state = {
    products,
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  
  onAlert = () => {
    alert('Thank you for your business,Your order will reach in 2-3 working days ');
   }


  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.quantity * item.price;
    })

   
    return (









      <SafeAreaView style={{ flex: 1 }}>
     
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        
    
        <Text style={{fontSize: 20,color: "green",fontWeight: "900",paddingVertical: 5,
paddingHorizontal: 0 ,textAlign: "center" }}>Total Quantity: {totalQuantity} </Text>
        <Text style={{fontSize: 20,color: "red",fontWeight: "900",paddingVertical: 5,textAlign: "center" }} >Total Price:  {totalPrice} ₹</Text>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Payment')}>
        <Button title="CheckOut"  />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {     
    flex: 1,
  },   
  title: {
    fontSize: 24,     
    fontWeight: 'bold',  
  },   
});




export default App;
 

 /*
 

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          React Native Pass Value From One Screen to Another
          Using React Navigation
        </Text>
        <Text style={styles.textStyle}>
          Values passed from First page: {route.params.paramKey}
        </Text>
<Product />
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>


  );
};



export default Bill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});
*/