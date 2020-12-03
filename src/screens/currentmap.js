import React,{useState} from 'react'
import {View,Text, Image,StyleSheet,Dimensions} from 'react-native'
import {
    ScrollView,
    TouchableOpacity} 
    from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import MapView,{ Marker } from 'react-native-maps';





export default class currentmap extends React.Component{
 constructor(props){
     super(props);
     this.state={
         latitude:0,
         longitude:0,
         error:null
     };
 }

componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            error:null
        });
        this.map.animateToRegion(region)

    },
    error=>this.setState({error :error.message}),
    { enableHighAccuracy: true,timeout : 20000,maximumAge:2000}
    );
}


    render() {
        return (
          <View style={styles.container}>
            <MapView style={styles.mapStyle} initialRegion={{
          latitude: 19.241950,
          longitude:72.976500,
          latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
        }}
        >
            <Marker coordinate={this.state}/>
            </MapView>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    });
