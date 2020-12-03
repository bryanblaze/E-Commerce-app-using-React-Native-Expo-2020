import {
    Animated,
    Dimensions,
    Image,
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
  } from 'react-native';
  import React, { Component } from 'react';
  import Product from '../components/Product';
  
  
  
  
  
  
  const width = Dimensions.get('window').width;
   
  class Animated_Item extends Component {
   
    constructor() {
   
      super();
   
      this.animatedValue = new Animated.Value(0);
   
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
   
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.item.id !== this.props.item.id) {
        return true;
      }
      return false;
    }
   
    componentDidMount() {
   
      Animated.timing(
        this.animatedValue,
        {
          toValue: 0.5,
          duration: 510,
          useNativeDriver: true
        }
      ).start(() => {
        this.props.afterAnimationComplete();
      });
   
    }
   
    deleteItem = () => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 510,
          useNativeDriver: true
        }
      ).start(() => {
        this.props.deleteItem(this.props.item.id);
      });
    }
   
    render() {
   
      const translate_Animation_Object = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [-width, 0, width]
      });
   
      const opacity_Animation_Object = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1, 0]
      });
   
      return (
        <Animated.View style={[
          styles.singleItemView, {
            transform: [{ translateX: translate_Animation_Object }],
            opacity: opacity_Animation_Object
          }]}>
   
          <Text style={styles.singleItemText}>
         
            burger {this.props.item.text}
   
          </Text>
   
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={this.deleteItem}>
            <Text style={styles.removeIcon}>{'\u00D7'}</Text>
   
          </TouchableOpacity>
   
        </Animated.View>
      );
    }
  }
   
  export default class App extends Component {
   
    constructor() {
   
      super();
      this.state = { valueArray: [], disabled: false }
      this.addNewElement = false;
      this.index = 0;
    }
   
    afterAnimationComplete = () => {
      this.index += 1;
      this.setState({ disabled: false });
    }
   
    add_New_View = () => {
      this.addNewElement = true;
      const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };
   
      this.setState({
        disabled: true,
        valueArray: [...this.state.valueArray, newlyAddedValue]
      });
    }
   
    remove_Selected_Item(id) {
      this.addNewElement = false;
      const newArray = [...this.state.valueArray];
      newArray.splice(newArray.findIndex(ele => ele.id === id), 1);
   
      this.setState(() => {
        return {
          valueArray: newArray
        }
      }, () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      });
    }
   
    render() {
      return (
        <View style={styles.container}>
          <ScrollView
            ref={scrollView => this.scrollView = scrollView}
            onContentSizeChange={() => {
              this.addNewElement && this.scrollView.scrollToEnd();
            }}>
   
            <View style={{ flex: 1, padding: 4 }}>
   
              {this.state.valueArray.map(ele => {
                return (
                  <Animated_Item
                    key={ele.id}
                    item={ele}
                    deleteItem={(id) => this.remove_Selected_Item(id)}
                    afterAnimationComplete={this.afterAnimationComplete}
                  />
                )
              })}
   
            </View>
   
          </ScrollView>
   
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.TouchableOpacityStyle}
            disabled={this.state.disabled}
            onPress={this.add_New_View}>
   
            <Image
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
              style={styles.FloatingButtonStyle}
            />
   
          </TouchableOpacity>
   
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      justifyContent: 'center',
      paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
   
    singleItemView: {
      backgroundColor: '#FF6F00',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingLeft: 16,
      margin: 5,
      borderRadius: 8
    },
   
    singleItemText: {
      color: '#fff',
      fontSize: 23,
      paddingRight: 18
    },
   
    TouchableOpacityStyle: {
   
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
   
    FloatingButtonStyle: {
   
      resizeMode: 'contain',
      width: 50,
      height: 50,
    },
   
    deleteButton: {
      position: 'absolute',
      right: 10,
      width: 25,
      height: 25,
      borderRadius: 18,
      padding: 7,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
   
    removeIcon: {
      width: '100%',
      fontSize: 20
    }
  });
  
  
  


/*

      
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
  <Text>Total Quantity: {totalQuantity}</Text>
  <Text>Total Price: {totalPrice}</Text>
</SafeAreaView>


*/
  
  
  
  
  /*
  export default function HomeScreen() {
  
    const [initialElements, changeEl]  = useState([
      { id : "0", text : "Object 1"},
      { id : "1", text : "Object 2"},
    ]);
  
    const [exampleState, setExampleState] = useState(initialElements);
    const [idx, incr] = useState(2);
  
    const addElement = () => {
      var newArray = [...initialElements , {id : idx, text: "Object " + (idx+1) }];
      incr(idx + 1);
      console.log(initialElements.length);
      setExampleState(newArray);
      changeEl(newArray);
    }
  
    return (
      <View style={styles.container}>
          <FlatList
              keyExtractor = {item => item.id}  
              data={exampleState}
              renderItem = {item => (<Text>{item.item.text}</Text>)} />
          <Button
            title="Add element"
            onPress={addElement} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%',
      borderWidth: 1
    },
  });
  
  */
  
  
  
  
  /*
  
  import React from 'react';
  import { View, Text, FlatList, Button, SafeAreaView, processColor } from 'react-native';
  
  
  
  
  const products = [
    { _id: 1, name: 'Item 1', price: 50, quantity: 0 },
    { _id: 2, name: 'Item 2', price: 29, quantity: 0 },
    { _id: 3, name: 'Item 3', price: 200, quantity: 0 },
  ];
  
  
  
  
  
  
  
  
  
  class ListItem extends React.Component {
    render() 
    
    {
      const { item } = this.props;
      
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <Text>{item.name} - </Text>
            <Text>{item.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <Button title="Subtract" onPress={this.props.onSubtract} />
            <Text>{item.quantity}</Text>
            <Button title="Add"  onPress={this.props.onAdd} />
          </View>
        </View>
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
          <Text>Total Quantity: {totalQuantity}</Text>
          <Text>Total Price: {totalPrice}</Text>
        </SafeAreaView>
      );
    }
  }
  
  export default App;
   
  */
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