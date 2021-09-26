import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import db from "../config";
import firebase from "firebase";

export default class WelcomeScreen extends Component {
  render() {
    return(
      <View style = {styles.container}>
        <Image
            source={require("../assets/app-icon.png")}
            style={{width:200, height: 220}}/>
        <Text style = {styles.title}>Remindly</Text>
        
        <TouchableOpacity 
          style = {[styles.button, { marginBottom: 30, marginTop: 10 }]} 
          onPress = {() => {this.props.navigation.navigate("LoginScreen")
          }}
        >
          <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style = {styles.button} 
          onPress = {() => {this.props.navigation.navigate("SignUpScreen")}}
        >
          <Text style = {styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#78B5B8",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 70,
    fontWeight: "350",
    paddingBottom: 30,
    color: "007e1c"
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
  },
  button: {
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#AAFF00",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  buttonText: {
    color: "#316b2c",
    fontWeight: "630",
    fontSize: 30
  }
});