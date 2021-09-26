import React,{Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import db from "../config";
import firebase from "firebase";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: ""
    };
  }

  userLogin = (emailId, password) => {
    firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("HomeScreen");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return(
      <View style = {styles.container}>
        <Text style = {styles.title}>Enter your login details</Text>
        <TextInput
            style={styles.loginBox}
            placeholder="someone@email.com"
            keyboardType="email-address"
            onChangeText={text => {
              this.setState({
                emailId: text
              });
            }}
          />
        <TextInput
          style={styles.loginBox}
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={text => {
            this.setState({
              password: text
            });
          }}
        />
          
        <TouchableOpacity 
          style={[styles.button, { marginBottom: 20, marginTop: 50 }]}
          style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
          onPress={() => {
            this.userLogin(this.state.emailId, this.state.password);
          }}
        >
          <Text style = {styles.buttonText}>Login</Text>
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
    fontSize: 35,
    fontWeight: "600",
    paddingBottom: 40,
    color: "#01437d"
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#005e36",
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
    fontWeight: "530",
    fontSize: 30
  }
});