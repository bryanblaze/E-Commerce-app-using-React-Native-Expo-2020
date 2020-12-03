import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Product0 from '../screens/Product0'
import Product1 from '../screens/Product1'
import Product2 from '../screens/Product2'
import Product3 from '../screens/Product3'
import Bill from '../screens/Bill'
import Detail1 from '../screens/Detail1'
import Detail2 from '../screens/Detail2'
import Detail3 from '../screens/Detail3'
import Detail4 from '../screens/Detail4'
import Detail5 from '../screens/Detail5'
import Detail6 from '../screens/Detail6'
import Detail7 from '../screens/Detail7'
import Detail8 from '../screens/Detail8'
import Payment from '../screens/payment'
import currentmap from '../screens/currentmap'
import card from '../screens/card'

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Product0" component={Product0}/>
            <Stack.Screen name="Product1" component={Product1}/>
            <Stack.Screen name="Product2" component={Product2}/>
            <Stack.Screen name="Product3" component={Product3}/>
            <Stack.Screen name="Bill" component={Bill}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Detail1" component={Detail1}/>
            <Stack.Screen name="Detail2" component={Detail2}/>
            <Stack.Screen name="Detail3" component={Detail3}/>
            <Stack.Screen name="Detail4" component={Detail4}/>
            <Stack.Screen name="Detail5" component={Detail5}/>
            <Stack.Screen name="Detail6" component={Detail6}/>
            <Stack.Screen name="Detail7" component={Detail7}/>
            <Stack.Screen name="Detail8" component={Detail8}/>
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name="currentmap" component={currentmap}/>
            <Stack.Screen name="card" component={card}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator;