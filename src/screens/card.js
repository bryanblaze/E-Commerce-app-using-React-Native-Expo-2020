import React from 'react'
import {View, 
    StyleSheet, 
    Text, 
  
    TextInput,
    KeyboardAvoidingView,SafeAreaView} from 'react-native'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/Product'
import Select from '../components/Select'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


export default class Card extends React.Component{
    constructor() {
        super();
        this.state = {
            number: '',
            exp_month: '',
            exp_year: '',
            cvc: '',
            name: '',
            paid: false,
        }
    }
    render(){
        
        

        return(
            <SafeAreaView style={{ flex: 0,marginTop:150 }}>
            
            <View style={[styles.form, styles.shadow, {shadowRadius: 0.5, shadowColor: '#0a2f52'}]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Credit Card</Text>
                </View>
                
                <TextInput
                    value={this.state.name}
                    onChangeText={name => this.setState({name})}
                    style={[{width: 300}, styles.textInput]}
                    placeholder="Cardholder's Name"
                    placeholderTextColor="#6E8EAC"
                />

                <View style={styles.rowContainer}>
                    <TextInput
                        value={this.state.number}
                        onChangeText={number => this.setState({number})}
                        style={[{width: 200}, styles.textInput]}
                        placeholder="Card Number"
                        placeholderTextColor="#6E8EAC"
                    />

                    <TextInput
                        value={this.state.cvc}
                        onChangeText={cvc => this.setState({cvc})}
                        style={[{width: 90}, styles.textInput]}
                        placeholder="CVV"
                        placeholderTextColor="#6E8EAC"
                    />    
                </View>

                <View style={[{marginBottom: 20,}, styles.rowContainer]}>
                
                </View>

                <TouchableOpacity   
                    onPress={this.handlePay}
                >
                  
                        <Text style={{fontSize: 20, color: '#fff'}}>Pay</Text>
                    
                </TouchableOpacity>
            </View>

            {!this.state.paid ?
                <View style={{width: 320, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',}}>
            
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Payment')}
                       
                        style={[styles.btn, styles.shadow]}
                    >
                        <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => 
                                
                            alert('PAYMENT SUCCESSFUL!!!           Thank For your business,Your Product Will be Delivered within 2-3 Working Days !!')}
                        style={[styles.btn, styles.shadow]}
                    >
                        <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Pay</Text>
                    </TouchableOpacity>  
                </View>
                :
                <View style={{width: 300, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity
                       
                        style={[styles.btn, styles.shadow, {width: 300}]}
                    >
                        <Text style={{color: '#0E4375', fontWeight: '600', fontSize: 20}}>Shopping</Text>
                    </TouchableOpacity>  
                </View>
            }  
      
        </SafeAreaView>
        )}}
       
                const styles = StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    form: {
                        width: 350,
                        backgroundColor: '#fff',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#1461aa',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 50,
                    },
                    headerContainer: {
                        width: 300, 
                        borderBottomColor: '#1461aa', 
                        borderBottomWidth: 1, 
                        marginVertical: 20, 
                        paddingBottom: 20
                    },
                    header: {
                        width: 300,
                        fontSize: 30,
                        color: '#0e4375',
                        textAlign: 'center',
                    },
                    textInput: {
                        fontSize: 20, 
                        borderStyle: 'solid', 
                        borderColor: '#1461aa', 
                        borderWidth: 1, 
                        marginVertical: 10, 
                        padding: 5, 
                        borderRadius: 5
                    },
                    rowContainer: {
                        width: 300, 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                    },
                    btnContainer: {
                        width: 300,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                    },
                    btn: {
                        width: 150,
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F5C851',
                        borderRadius: 10,
                    },
                    shadow: {
                        shadowColor: '#312810',
                        shadowOffset: {width: 1, height: 1},
                        shadowOpacity: 1,
                        shadowRadius: 3,
                    },
                });
                
                const monthData = [
                    {
                        value: '01'
                    },
                    {
                        value: '02'
                    },
                    {
                        value: '03'
                    },
                    {
                        value: '04'
                    },
                    {
                        value: '05'
                    },
                    {
                        value: '06'
                    },
                    {
                        value: '07'
                    },
                    {
                        value: '08'
                    },
                    {
                        value: '09'
                    },
                    {
                        value: '10'
                    },
                    {
                        value: '11'
                    },
                    {
                        value: '12'
                    },
                ];
                           
            
        
     
 